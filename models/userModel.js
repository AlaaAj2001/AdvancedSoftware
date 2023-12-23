const knex = require('../knexfile');

module.exports = {
  createUser: (user) => knex('users').insert(user),
  getUserByEmail: (email) => knex('users').where('email', email).first(),
};
