// models/userModel.js
const db = require('../db'); // Adjust the path

function createUser(user) {
  return db('users').insert(user);
}

function getUsers() {
  return db('users').select('*');
}

function updateUser(id, updatedUser) {
  return db('users').where({ id }).update(updatedUser);
}

function deleteUser(id) {
  return db('users').where({ id }).del();
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
