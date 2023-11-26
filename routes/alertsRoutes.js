// routes/alertsRoutes.js
const express = require('express');
const router = express.Router();
const alertsController = require('../controllers/alertsController'); // Adjust the path

// Define routes
router.post('/', alertsController.createAlert);
router.get('/', alertsController.getAlerts);
router.put('/:id', alertsController.updateAlert);
router.delete('/:id', alertsController.deleteAlert);

module.exports = router;
