// controllers/reportController.js

const reportModel = require('../models/reportModel');
const userModel = require('../models/userModel'); // Import the userModel

const createReport = async (req, res) => {
  const { username, description } = req.body;

  try {
    // Check if the username exists in the users table
    const user = await userModel.getUserByUsername(username);

    if (!user) {
      // If the user does not exist, return an error
      return res.status(404).json({ error: 'User not found' });
    }

    // If the user exists, retrieve the userId
    const userId = user.id;

    // Insert the report with the userId
    const report = await reportModel.createReport({ userId, description });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {
  createReport, 
};
