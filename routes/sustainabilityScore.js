const express = require('express');
const router = express.Router();
const sustainabilityScoreController = require('../controllers/sustainabilityScoreController');

// Calculate Sustainability Score
router.post('/users/:userId/sustainability-score', async (req, res) => {
  const userId = req.params.userId;
  const score = await sustainabilityScoreController.calculateScore(userId);
  res.json({ score });
});

// Get Sustainability Score
router.get('/users/:userId/sustainability-score', async (req, res) => {
  const userId = req.params.userId;
  const score = await sustainabilityScoreController.getScore(userId);
  res.json({ score });
});

module.exports = router;
