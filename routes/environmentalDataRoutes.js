// routes/environmentalDataRoutes.js
const express = require('express');
const router = express.Router();
const environmentalDataController = require('../controllers/environmentalDataController'); // Adjust the path

// Define routes
router.post('/', environmentalDataController.createEnvironmentalData);
router.get('/', environmentalDataController.getEnvironmentalData);
router.put('/:id', environmentalDataController.updateEnvironmentalData);
router.delete('/:id', environmentalDataController.deleteEnvironmentalData);

module.exports = router;
