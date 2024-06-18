const { admin } = require("../config/firebase");
const { getAuth, signInWithCustomToken } = require('../config/firebase');

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
        return res.status(403).json({ error: 'Unauthorized' });
    }
};

module.exports = { 
    verifyAndRefreshToken, 
    refreshToken 
};