const environmentalDataModel = require('../models/environmentalDataModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const addEnvironmentalData = async (req, res) => {
    try {
        // Get the token from the request headers
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        // Verify the token
        jwt.verify(token, 'yourSecretKey', async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized: Invalid token' });
            }
            // If token is valid, proceed to add environmental data
            const { username, source, data_type, value, location } = req.body;
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
        });
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
