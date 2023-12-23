const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', async (req, res) => {
  try {
    const userData = req.body;
    await userController.createUser(userData);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
