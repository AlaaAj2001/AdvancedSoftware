const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);

module.exports = {
  getUserByEmail: async (email) => {
    return knex('users').where('email', email).first(); // Retrieve user by email
  },

  getUserByUsername: async (username) => {
    return knex('users').where('username', username).first(); // Retrieve user by username
  },

  // Add more functions as needed for authentication, such as creating a new user, etc.
};
