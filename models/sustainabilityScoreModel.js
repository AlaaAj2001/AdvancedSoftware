const knex = require('../knexfile');

module.exports = {
  countUserEntries: (userId) =>
    knex('environmental_data').where({ user_id: userId }).count(),

  getMostEnteredDataType: (userId) =>
    knex('environmental_data')
      .select('data_type')
      .count('data_type as counter')
      .where({ user_id: userId })
      .groupBy('data_type')
      .orderBy('counter', 'desc')
      .first(),
};
