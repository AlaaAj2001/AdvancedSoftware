const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);

module.exports = {
  getUserByUsername: (username) => knex('users').where('username', username).first(),
  getUserByEmail: (email) => knex('users').where('email', email).first(),
};
