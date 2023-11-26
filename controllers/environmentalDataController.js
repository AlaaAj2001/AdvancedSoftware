// controllers/environmentalDataController.js
const environmentalDataModel = require('../models/environmentalDataModel'); // Adjust the path

async function createEnvironmentalData(req, res) {
  try {
    const data = req.body; // Assuming data is sent in the request body
    const result = await environmentalDataModel.createEnvironmentalData(data);
    res.status(201).json({ message: 'Environmental data created successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getEnvironmentalData(req, res) {
  try {
    const data = await environmentalDataModel.getEnvironmentalData();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateEnvironmentalData(req, res) {
  try {
    const id = req.params.id;
    const updatedData = req.body; // Assuming updated data is sent in the request body
    const result = await environmentalDataModel.updateEnvironmentalData(id, updatedData);
    res.status(200).json({ message: 'Environmental data updated successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteEnvironmentalData(req, res) {
  try {
    const id = req.params.id;
    const result = await environmentalDataModel.deleteEnvironmentalData(id);
    res.status(200).json({ message: 'Environmental data deleted successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Repeat similar functions for other CRUD operations and entities

module.exports = {
  createEnvironmentalData,
  getEnvironmentalData,
  updateEnvironmentalData,
  deleteEnvironmentalData,
};
