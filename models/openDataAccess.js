const knex = require('C:\Users\lenovo\Documents\GitHub\AdvancedSoftware\knexfile.js');

module.exports = {
  grantDataAccess: (researcherId, dataId) =>
    knex('open_data_access').insert({ researcherId, dataId }),

  getDataAccess: (researcherId) =>
    knex
      .select('environmental_data.*')
      .from('environmental_data')
      .join('open_data_access', 'environmental_data.id', '=', 'open_data_access.dataId')
      .where('open_data_access.researcherId', researcherId),
};
