const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);


const addEnvironmentalData = async (data) => {
    try {
        data.created_at = new Date().toISOString(); // Add current date and time
        const insertedData = await knex('environmentaldata').insert(data);
        return insertedData;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getDataByDataType = async (data_type) => {
    try {
        const data = await knex('environmentaldata').where('data_type', data_type);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getDataByLocation = async (location) => {
    try {
        const data = await knex('environmentaldata').where('location', location);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    addEnvironmentalData,
    getDataByDataType,
    getDataByLocation,
};
