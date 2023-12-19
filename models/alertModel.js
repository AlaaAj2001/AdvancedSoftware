// models/alertModel.js

const knex = require('C:\Users\lenovo\Documents\GitHub\AdvancedSoftware\knexfile.js');

module.exports = {
  getAllAlerts: () => knex('alerts').select('*'),
  getAlertById: (id) => knex('alerts').where({ id }).first(),
  createAlert: (alert) => knex('alerts').insert(alert),
  updateAlert: (id, data) => knex('alerts').where({ id }).update(data),
  deleteAlert: (id) => knex('alerts').where({ id }).del(),
};
