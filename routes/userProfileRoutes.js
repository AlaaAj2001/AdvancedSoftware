const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST route for user login
router.post('/', async (req, res) => {
  try {
    const { user, token } = await authController.loginUser(req.body);
    // Return user data and token after successful login
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
