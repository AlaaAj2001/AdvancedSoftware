const express = require('express');
const router = express.Router();
const EnvironmentalDataController = require('../controllers/environmentalDataController');

router.post('/submit-data', EnvironmentalDataController.submitData);


module.exports = router;
