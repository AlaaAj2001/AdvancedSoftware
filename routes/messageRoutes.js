const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Route for sending a message
router.post('/send', async (req, res) => {
  try {
    const messageData = req.body;
    await messageController.sendMessage(messageData);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route for fetching messages for a user
router.get('/fetch', async (req, res) => {
  try {
    const { receiverUsernameOrEmail, receiverPassword } = req.body;
    const messages = await messageController.fetchMessages(receiverUsernameOrEmail, receiverPassword);
    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
