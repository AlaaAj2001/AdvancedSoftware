// models/reportModel.js
const knex = require('../knexfile.js');

module.exports = {
  getAllReports: () => knex('reports').select('*'),
  getReportById: (id) => knex('reports').where({ id }).first(),
  createReport: (report) => knex('reports').insert(report),
  updateReport: (id, data) => knex('reports').where({ id }).update(data),
  deleteReport: (id) => knex('reports').where({ id }).del(),
};
