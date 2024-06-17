const express = require('express');
const router = express.Router();
const verifyAndRefreshToken = require('../middleware/index');
const firebaseAuthController = require('../controllers/firebase-auth-controller');

router.post('/api/register', firebaseAuthController.registerUser);
router.post('/api/login', firebaseAuthController.loginUser);
router.post('/api/logout', firebaseAuthController.logoutUser);
router.post('/api/reset-password', firebaseAuthController.resetPassword);
router.use(verifyAndRefreshToken.verifyAndRefreshToken);
router.get('/protected', (req, res) => {
    res.send(`You are authenticated!`);
});

module.exports = router;