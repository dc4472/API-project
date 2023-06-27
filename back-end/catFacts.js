const express = require('express');
const axios = require('axios');
const catFactsRouter = express.Router();

//https://cat-fact.herokuapp.com/facts/random?amount=5'
catFactsRouter.get('/', async (req, res) => {
  try {
    // const { amount = 100 } = req.query
    const response = await axios.get('https://cat-fact.herokuapp.com/facts/random?amount=100');
    const facts = response.data;
    res.json(facts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch cat facts' });
  }
});

module.exports = catFactsRouter;