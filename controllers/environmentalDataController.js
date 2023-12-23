const environmentalDataModel = require('../models/environmentalDataModel');

const addEnvironmentalData = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addEnvironmentalData,
};
