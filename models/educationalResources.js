const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);


module.exports = {
  getAllResources: () => knex('educational_resources').select('*'),
  getResourceById: (id) => knex('educational_resources').where({ id }).first(),
  createResource: async (resource) => {
    try {
      if (!resource || !resource.title || !resource.author || !resource.content || !resource.url) {
        throw new Error('Invalid resource data. Make sure all required fields are provided.');
      }
  
      const [resourceId] = await knex('educational_resources').insert({
        title: resource.title,
        author: resource.author,
        content: resource.content,
        url: resource.url,
      });
  
      return resourceId;
    } catch (error) {
      console.error('Error creating resource:', error);
      throw new Error('Failed to create educational resource');
    }
  },
  updateResource: (id, data) => knex('educational_resources').where({ id }).update(data),
  deleteResource: (id) => knex('educational_resources').where({ id }).del(),
};
