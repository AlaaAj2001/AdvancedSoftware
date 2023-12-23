const express = require('express');
const router = express.Router();
const environmentalDataController = require('../controllers/environmentalDataController');

router.post('/add', environmentalDataController.addEnvironmentalData);

module.exports = router;
