const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);

const User = {
  getAllUsers: async () => {
    return await knex('users').select('*');
  },

  getUserByEmail: async (email) => {
    return knex('users').where('email', email).first(); 
  },
  
  getUserType: async (username) => {
    return knex('users').where('username', username).select('user_type').first();
  },

  getUserByUsername: async (username) => {
    return knex('users').where('username', username).first(); 
  },

  updateUser: async (username, userData) => {
    return await knex('users').where('username', username).update(userData);
  },

  deleteUser: async (username) => {
    return await knex('users').where('username', username).del();
  }
};


module.exports = User;
