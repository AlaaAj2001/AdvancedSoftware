const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userProfileController');

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await userController.createUser(userData);
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const credentials = req.body;
    const { user, token } = await userController.loginUser(credentials);
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

// Route for updating user profile
router.put('/update/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedData = req.body;
    const updatedUser = await userController.updateUser(userId, updatedData);
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route for deleting user profile
router.delete('/delete/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    await userController.deleteUser(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
