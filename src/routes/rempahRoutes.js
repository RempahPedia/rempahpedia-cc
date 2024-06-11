const express = require('express');
const router = express.Router();
const rempahService = require('../services/rempahService')

router.get('/', async (req, res) => {
    try {
      const data = await rempahService.getAllRempah();
      res.json(data);
    } catch (error) {
      console.error('Error fetching rempah data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } 
});

module.exports = router;