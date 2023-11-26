// controllers/userController.js
const userModel = require('../models/userModel'); // Adjust the path

async function createUser(req, res) {
  try {
    const newUser = req.body;
    await userModel.createUser(newUser);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function getUsers(req, res) {
  try {
    const users = await userModel.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function updateUser(req, res) {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    await userModel.updateUser(userId, updatedUser);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.params.id;
    await userModel.deleteUser(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
