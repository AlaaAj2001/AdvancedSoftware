// environmentalDataRoutes.js
const express = require('express');
const router = express.Router();
const environmentalDataController = require('../controllers/environmentalDataController');

router.post('/add', environmentalDataController.addEnvironmentalData);
router.get('/byDataType/:data_type', environmentalDataController.getDataByDataType);
router.get('/byLocation/:location', environmentalDataController.getDataByLocation);

module.exports = router;
