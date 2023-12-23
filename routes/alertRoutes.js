// routes/alertRoutes.js

const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');

// Get All Alerts
router.get('/', async (req, res) => {
  const alerts = await alertController.getAllAlerts();
  res.json({ alerts });
});

// Get Alerts by Type
router.get('/:alertType', async (req, res) => {
  const alertType = req.params.alertType;
  const alerts = await alertController.getAlertsByType(alertType);
  res.json({ alerts });
});

module.exports = router;
