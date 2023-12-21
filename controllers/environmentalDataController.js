const EnvironmentalDataModel = require('../models/environmentalDataModel');

const EnvironmentalDataController = {
  submitData: async (req, res) => {
    const { data_type, region, source_of_data , value} = req.body;
    const time = new Date().toLocaleTimeString(); // Get system time
    const date = new Date().toLocaleDateString(); // Get system date

    const data = {
      userID: req.user.id, // Assuming userID is obtained from the authenticated user
      data_type,
      region,
      source_of_data,
      value,
      time,
      date
    };

    try {
      const result = await EnvironmentalDataModel.submitData(data);
      res.status(201).json({ message: 'Data submitted successfully', data: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  
};

module.exports = EnvironmentalDataController;
