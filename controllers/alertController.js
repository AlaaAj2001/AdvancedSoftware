// controllers/alertController.js

const alertModel = require('../models/alertModel');

const grantAlertAccess = async (userId, alertId) => alertModel.grantAlertAccess(userId, alertId);

const getAlertAccess = async (userId) => alertModel.getAlertAccess(userId);

const revokeAlertAccess = async (userId, alertId) => alertModel.revokeAlertAccess(userId, alertId);

module.exports = {
  grantAlertAccess,
  getAlertAccess,
  revokeAlertAccess,
};
