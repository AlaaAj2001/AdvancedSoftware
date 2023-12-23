// routes/sustainabilityScoreRoutes.js

const express = require('express');
const router = express.Router();
const sustainabilityScoreController = require('../controllers/sustainabilityScoreController');

// Calculate Sustainability Score and return it
router.post('/users/:userId/sustainability-score', async (req, res) => {
  const userId = req.params.userId;
  try {
    const score = await sustainabilityScoreController.calculateSustainabilityScore(userId);
    res.json({ score });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
