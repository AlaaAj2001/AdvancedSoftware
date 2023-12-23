const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const { user, token } = await authController.loginUser({ username, password });

    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
