const knex = require('../knexfile.js');

const EnvironmentalDataModel = {
  submitData: (data) => knex('environmental_data').insert(data),

};

module.exports = EnvironmentalDataModel;
