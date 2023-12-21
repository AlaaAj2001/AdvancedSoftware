// controllers/reportController.js

const reportModel = require('../models/reportModel');const createReport = async (req, res) => {
  const newReport = req.body;
  try {
    const report = await reportModel.createReport(newReport);
    res.status(201).json(report);
  } catch (error) {
    console.error('Error in createReport:', error); // Log the error
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

;module.exports = {
  createReport,
   // Add this line
};
