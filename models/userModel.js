const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);

module.exports = {
  getAllUsers: () => knex('users').select('*'),
  getUserById: (id) => knex('users').where({ id }).first(),
  createUser: (user) => knex('users').insert(user),
  updateUser: (id, data) => knex('users').where({ id }).update(data),
  deleteUser: (id) => knex('users').where({ id }).del(),
};

//module.exports = UserModel;