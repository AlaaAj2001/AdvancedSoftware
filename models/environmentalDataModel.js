// models/environmentalDataModel.js
const db = require('../db'); // Adjust the path

function createEnvironmentalData(data) {
  return db('environmentalData').insert(data);
}

function getEnvironmentalData() {
  return db('environmentalData').select('*');
}

function updateEnvironmentalData(id, updatedData) {
  return db('environmentalData').where({ id }).update(updatedData);
}

function deleteEnvironmentalData(id) {
  return db('environmentalData').where({ id }).del();
}

// Repeat similar functions for other CRUD operations and entities

module.exports = {
  createEnvironmentalData,
  getEnvironmentalData,
  updateEnvironmentalData,
  deleteEnvironmentalData,
};
