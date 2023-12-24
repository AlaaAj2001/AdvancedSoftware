const express = require('express');
const router = express.Router();
const sustainabilityScoreController = require('../controllers/sustainabilityScoreController');

// Route to calculate the final score for all users and retrieve all sustainability scores
router.get('/all', sustainabilityScoreController.calculateFinalScoreForAllUsersAndRetrieve);

module.exports = router;