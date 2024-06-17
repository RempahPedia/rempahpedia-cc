const express = require('express');
const router = express.Router();

const firebaseAuthController = require('../controllers/firebase-auth-controller');
const penggunaService = require('../services/penggunaService')

router.post('/api/register', firebaseAuthController.registerUser);
router.post('/api/login', firebaseAuthController.loginUser);
router.post('/api/logout', firebaseAuthController.logoutUser);
router.post('/api/reset-password', firebaseAuthController.resetPassword);

router.get('/api/user', async (req, res) => {
    try{
        if(!req.user){
            return res.status(401).json({ error: 'User Not found' });
        }
        const userEmail = req.user.email;

        const data = await penggunaService.getCurrentUser(userEmail);
        res.status(200).json(data);

    } catch(error){
        console.error('Error fetching data:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;