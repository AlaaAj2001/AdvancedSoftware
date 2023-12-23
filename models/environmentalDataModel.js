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

module.exports = {
    addEnvironmentalData,
};

