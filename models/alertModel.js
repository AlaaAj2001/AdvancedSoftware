// models/alertModel.js

const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);

module.exports = {
  getAllAlerts: () => knex('alerts').select('*'),
  getAlertsByType: (alertType) => knex('alerts').where({ alert_type: alertType }).select('*'),

};
