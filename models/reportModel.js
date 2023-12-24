
// models/reportModel.js

const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);

module.exports = {

  createReport: (report) => knex('reports').insert(report),

  
};
