// controllers/alertsController.js
const alertsModel = require('../models/alertsModel'); // Adjust the path

async function createAlert(req, res) {
  try {
    const alert = req.body; // Assuming alert data is sent in the request body
    const result = await alertsModel.createAlert(alert);
    res.status(201).json({ message: 'Alert created successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getAlerts(req, res) {
  try {
    const alerts = await alertsModel.getAlerts();
    res.status(200).json(alerts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateAlert(req, res) {
  try {
    const id = req.params.id;
    const updatedAlert = req.body; // Assuming updated data is sent in the request body
    const result = await alertsModel.updateAlert(id, updatedAlert);
    res.status(200).json({ message: 'Alert updated successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteAlert(req, res) {
  try {
    const id = req.params.id;
    const result = await alertsModel.deleteAlert(id);
    res.status(200).json({ message: 'Alert deleted successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Repeat similar functions for other CRUD operations and entities

module.exports = {
  createAlert,
  getAlerts,
  updateAlert,
  deleteAlert,
};
