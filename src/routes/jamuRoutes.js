const express = require('express');
const router = express.Router();
const jamuService = require('../services/jamuService')

// Define routes for /api/jamu
router.get('/', async (req, res) => {
    try {
        const data = await jamuService.getAllJamu();
        res.json(data);
      } catch (error) {
        console.error('Error fetching rempah data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } 
});

// Export the router
module.exports = router;