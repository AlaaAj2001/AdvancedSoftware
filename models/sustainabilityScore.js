const knex = require('C:\Users\lenovo\Documents\GitHub\AdvancedSoftware\knexfile.js');


module.exports = {
  getSustainabilityScoreByUserId: (userId) =>
    knex('users').select('sustainabilityScore').where({ id: userId }).first(),

  updateSustainabilityScore: (userId, score) =>
    knex('users').where({ id: userId }).update({ sustainabilityScore: score }),
};
