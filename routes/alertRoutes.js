// routes/alertRoutes.js

const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');

// Get All Alerts
router.get('/alerts', async (req, res) => {
  const alerts = await alertController.getAllAlerts();
  res.json({ alerts });
});

// Get Alert by ID
router.get('/alerts/:alertId', async (req, res) => {
  const alertId = req.params.alertId;
  const alert = await alertController.getAlertById(alertId);
  res.json({ alert });
});

// Create Alert
router.post('/alerts', async (req, res) => {
  const newAlert = req.body;
  const alert = await alertController.createAlert(newAlert);
  res.json({ alert });
});

// Update Alert
router.put('/alerts/:alertId', async (req, res) => {
  const alertId = req.params.alertId;
  const updatedData = req.body;
  const alert = await alertController.updateAlert(alertId, updatedData);
  res.json({ alert });
});

// Delete Alert
router.delete('/alerts/:alertId', async (req, res) => {
  const alertId = req.params.alertId;
  await alertController.deleteAlert(alertId);
  res.json({ message: 'Alert deleted successfully' });
});

module.exports = router;
