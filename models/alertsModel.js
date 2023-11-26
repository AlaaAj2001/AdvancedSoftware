// models/alertsModel.js
const db = require('../db'); // Adjust the path

function createAlert(alert) {
  return db('alerts').insert(alert);
}

function getAlerts() {
  return db('alerts').select('*');
}

function updateAlert(id, updatedAlert) {
  return db('alerts').where({ id }).update(updatedAlert);
}

function deleteAlert(id) {
  return db('alerts').where({ id }).del();
}

// Repeat similar functions for other CRUD operations and entities

module.exports = {
  createAlert,
  getAlerts,
  updateAlert,
  deleteAlert,
};
