const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get All Users
router.get('/', async (req, res) => {
  const users = await userController.getAllUsers();
  res.json({ users });
});

// Get User by ID
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const user = await userController.getUserById(userId);
  res.json({ user });
});

// Create User
router.post('/', async (req, res) => {
  const newUser = req.body;
  const user = await userController.createUser(newUser);
  res.json({ user });
});

// Update User
router.put('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;
  const user = await userController.updateUser(userId, updatedData);
  res.json({ user });
});

// Delete User
router.delete('/:userId', async (req, res) => {
  const userId = req.params.userId;
  await userController.deleteUser(userId);
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;