const knex = require('C:\Users\lenovo\Documents\GitHub\AdvancedSoftware\knexfile.js');


module.exports = {
  getAllResources: () => knex('educational_resources').select('*'),
  getResourceById: (id) => knex('educational_resources').where({ id }).first(),
  createResource: (resource) => knex('educational_resources').insert(resource),
  updateResource: (id, data) => knex('educational_resources').where({ id }).update(data),
  deleteResource: (id) => knex('educational_resources').where({ id }).del(),
};
