const environmentalDataModel = require('../models/environmentalDataModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userProfileModel'); // Import your user model

const addEnvironmentalData = async (req, res) => {
    try {
        // Assuming the username is available in the request body
        const { username, source, data_type, value, location } = req.body;

        // Check if the provided username exists in the user table
        const userExists = await userModel.checkUserExists(username);

        if (!userExists) {
            return res.status(403).json({ message: 'Forbidden: User not authorized to add environmental data' });
        }

        // If user exists, proceed to add environmental data
        const data = {
            username,
            source,
            data_type,
            value,
            location,
            created_at: new Date().toISOString(),
        };

        const insertedData = await environmentalDataModel.addEnvironmentalData(data);
        res.status(201).json({ message: 'Environmental data added successfully', data: insertedData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDataByDataType = async (req, res) => {
    try {
        const { data_type } = req.params;
        const data = await environmentalDataModel.getDataByDataType(data_type);
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDataByLocation = async (req, res) => {
    try {
        const { location } = req.params;
        const data = await environmentalDataModel.getDataByLocation(location);
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addEnvironmentalData,
    getDataByDataType,
    getDataByLocation,
};
