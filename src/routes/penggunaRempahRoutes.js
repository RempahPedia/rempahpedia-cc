const express = require('express');
const router = express.Router();

const penggunaService = require('../services/penggunaService');

router.post('/save', async (req, res) => {
    try{
        if(!req.user){
            return res.status(401).json({ error: 'User Not found' });
        }
        const userEmail = req.user.email;
        const rempah = req.body.rempah;
        await penggunaService.savePrediciton(userEmail, rempah);
        res.status(201).json({ 
            message: `successfully save the prediction for user: ${userEmail}`
        });
    } catch(error){
        console.error('Error adding data:', error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/unlocked', async (req, res) => {
    try{
        if(!req.user){
            return res.status(401).json({ error: 'User Not found' });
        }
        const userEmail = req.user.email;

        const data = await penggunaService.getNumberOfRempahUnlocked(userEmail);
        res.status(200).json(data);

    } catch(error){
        console.error('Error adding data:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;