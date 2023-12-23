// controllers/alertController.js

const alertModel = require('../models/alertModel');
const getAllAlerts = async () => alertModel.getAllAlerts(); 
const getAlertsByType = async (alertType) => {
  try {
    const alerts = await alertModel.getAlertsByType(alertType);
    return alerts;
  } catch (error) {
    console.error('Error in getAlertsByType:', error);
    throw error;
  }
};
module.exports = {
  getAlertsByType, 

  getAllAlerts, 
};
