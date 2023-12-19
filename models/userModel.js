const knex = require('C:\Users\lenovo\Documents\GitHub\AdvancedSoftware\knexfile.js');


module.exports = {
  getAllUsers: () => knex('users').select('*'),
  getUserById: (id) => knex('users').where({ id }).first(),
  createUser: (user) => knex('users').insert(user),
  updateUser: (id, data) => knex('users').where({ id }).update(data),
  deleteUser: (id) => knex('users').where({ id }).del(),
};
