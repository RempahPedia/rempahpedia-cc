const { admin } = require("../config/firebase");
const { getAuth, signInWithCustomToken } = require('../config/firebase');
const axios = require('axios');

const refreshToken = async (user) => {
    const currentTime = Date.now() / 1000;
    const timeToExpire = user.exp - currentTime;

    if (timeToExpire < 5 * 60) {
        try {
            const newCustomToken = await admin.auth().createCustomToken(user.uid);
            const auth = getAuth();
            const newCredential = await signInWithCustomToken(auth, newCustomToken);
            const newIdToken = newCredential._tokenResponse.idToken;
            return newIdToken;
        } catch (error) {
            console.error('Error refreshing token:', error);
        }
    }

    return null;
}

const verifyAndRefreshToken = async (req, res, next) => {
    const idToken = req.cookies.access_token;

    if (!idToken) {
        req.user = null; 
        return next();
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken); 
        req.user = decodedToken;

        const newIdToken = await refreshToken(decodedToken);
        if (newIdToken) {
            res.cookie('access_token', newIdToken, {
                httpOnly: true
            });
        }

        next();
    } catch (error) {
        console.error('Error verifying token:', error);

        if (error.code === 'auth/id-token-expired') {
            // Token is expired, refresh it
            API_KEY = process.env.FIREBASE_API_KEY;
            try {
                const refreshToken = req.cookies.refresh_token;
                const refreshTokenResponse = await axios.post(`https://securetoken.googleapis.com/v1/token?key=${API_KEY}`, {
                    grant_type: 'refresh_token',
                    refresh_token: refreshToken,
                });

                const newIdToken = refreshTokenResponse.data.id_token;

                res.cookie('access_token', newIdToken, {
                    httpOnly: true
                });

                req.user = await admin.auth().verifyIdToken(newIdToken);
                return next();
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError);
                return res.status(403).json({ error: 'Fail to refresh token' });
            }
        }
        return res.status(403).json({ error: 'Unauthorized' });
    }
};

module.exports = { 
    verifyAndRefreshToken, 
    refreshToken 
};