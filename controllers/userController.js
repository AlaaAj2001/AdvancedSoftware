const userModel = require('../models/userModel');

const getAllUsers = async () => userModel.getAllUsers();

const getUserById = async (userId) => userModel.getUserById(userId);

const createUser = async (user) => userModel.createUser(user);

const updateUser = async (userId, data) => userModel.updateUser(userId, data);

const deleteUser = async (userId) => userModel.deleteUser(userId);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
