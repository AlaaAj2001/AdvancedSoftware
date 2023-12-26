const express = require('express');
const router = express.Router();
const userController = require('../controllers/userProfileController');

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const { user, token } = await userController.loginUser({ username, password });

    let message = `Login successful as a ${user.user_type}`;
    let welcomeMessages = []; 

    if (user.user_type !== 'NormalUser') {
      // Welcome messages for non-NormalUser types
      welcomeMessages.push('To access the aggregated environmental data:');
      welcomeMessages.push('According to:');
      welcomeMessages.push({
        "data type": [
          "Please try this API: http://localhost:3000/api/environmentaldata/byDataType/:data_type",
          "By putting instead of :data_type {humidity, temperature, air quality, water quality, biodiversity metrics}"
        ],
        "location": [
          "Please try this API: http://localhost:3000/api/environmentaldata/byLocation/:location",
          "By putting instead of :location {Nablus, Tulkarm, Ramallah, Jerusalem, Jericho}"
        ]
      });
    } else {
      // Welcome message for NormalUser
      welcomeMessages.push('Welcome to the system for Normal Users!');
     }

    // Your response object
    const responseObject = {
      message: message,
      welcome: welcomeMessages,
      // other properties in your response
    };

    // Send the response
    res.status(200).json(responseObject);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

// Route for updating user profile
router.put('/update/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const updatedData = req.body;
    const updatedUser = await userController.updateUser(username, updatedData);
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route for deleting user profile
router.delete('/delete/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const { password } = req.body;
    await userController.deleteUser(username, password);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
