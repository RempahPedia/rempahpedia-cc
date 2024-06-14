const express = require('express');
const router = express.Router();

const penggunaService = require('../services/penggunaService');

router.post('/save', async (req, res) => {
    try{
        if(!req.user){
            res.status(400).json({ error: 'User Not found' });
        }
        const userEmail = req.user.email;
        const rempah = req.body.rempah;
        await penggunaService.savePrediciton(userEmail, rempah);
        res.status(200).json({ 
            message: `successfully save the prediction for user: ${userEmail}`
        });
    } catch(error){
        console.error('Error adding data:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;