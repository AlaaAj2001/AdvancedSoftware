// models/reportModel.js
const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);

module.exports = {
  getAllReports: () => knex('reports').select('*'),
  getReportById: (id) => knex('reports').where({ id }).first(),
  createReport: (report) => knex('reports').insert(report),
  updateReport: (id, data) => knex('reports').where({ id }).update(data),
  deleteReport: (id) => knex('reports').where({ id }).del(),
};
