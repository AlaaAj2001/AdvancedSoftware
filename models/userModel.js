const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);

module.exports = {
  createUser: (user) => knex('users').insert(user),
  getUserByEmail: (email) => knex('users').where('email', email).first(),
  getUserByUsername: (username) => knex('users').where('username', username).first(),
};


