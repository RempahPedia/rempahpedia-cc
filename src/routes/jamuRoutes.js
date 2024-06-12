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

router.get('/search', async (req, res) => {
  try {
      const { keyword, filter } = req.query;
      const filters = filter ? filter.split(',') : [];

      const results = await jamuService.searchJamu(keyword, filters);

      if (results.length===0){
        return res.status(404).json({ error: 'Jamu is not found' });
      }
      res.json(results);
  } catch (error) {
      console.error('Error occurred while searching:', error);
      res.status(500).json({ error: 'An error occurred while searching' });
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