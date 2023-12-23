const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);

const User = {
  getAllUsers: async () => {
    return await knex('users').select('*');
  },

  getUserById: async (id) => {
    return await knex('users').where({ id }).first();
  },

  getUserByEmail: async (email) => {
    return await knex('users').where({ email }).first();
  },

  createUser: async (user) => {
    return await knex('users').insert(user);
  },

  updateUser: async (id, userData) => {
    return await knex('users').where({ id }).update(userData);
  },

  deleteUser: async (id) => {
    return await knex('users').where({ id }).del();
  }
};

module.exports = User;
