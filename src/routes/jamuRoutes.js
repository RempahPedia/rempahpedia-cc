const express = require('express');
const router = express.Router();
const jamuService = require('../services/jamuService')

router.get('/', async (req, res) => {
    try {
        const data = await jamuService.getAllJamu();
        res.json(data);
      } catch (error) {
        console.error('Error fetching jamu data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } 
});

router.get('/:id', async (req, res) => {
  try {
    const jamuId = req.params['id']
    const data = await jamuService.getJamu(jamuId);
    res.json(data);
  } catch (error) {
    console.error('Error fetching jamu data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
});

module.exports = router;