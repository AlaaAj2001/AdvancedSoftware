const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);

const getEntryCountByUserId = async (username) => {
    try {
        // Directly query the environmentaldata table to count occurrences of the username
        const entryCount = await knex('environmentaldata').where('username', username).count('* as count').first();
        console.log('Username:', username); // Log username
        console.log('Entry Count:', entryCount.count); // Log entry count

        return parseInt(entryCount.count, 10) || 0; // Parse entry count as an integer
    } catch (error) {
        console.error('Error in getEntryCountByUserId:', error.message);
        throw error;
    }
};

const getMostEnteredDataTypeByUserId = async (username) => {
    try {
        // Query the environmentaldata table to get the most entered data type for the user
        const result = await knex('environmentaldata')
            .where('username', username)
            .groupBy('data_type')
            .select('data_type')
            .count('* as count')
            .orderBy('count', 'desc')
            .first();

        console.log('Most Entered Data Type Result:', result); // Log the result

        return result ? result.data_type : null;
    } catch (error) {
        console.error('Error in getMostEnteredDataTypeByUserId:', error.message);
        throw error;
    }
};

const updateOrCreateSustainabilityScore = async (username, totalScore, mostEnteredDataType) => {
    try {
        // Check if the user already has a sustainability score
        const existingScore = await knex('sustainability_scores').where('username', username).first();

        console.log('Existing Score:', existingScore); // Log the existing score

        if (existingScore) {
            // Update the existing score
            await knex('sustainability_scores').where('username', username).update({
                finalScore: totalScore,
                mostEnteredDataType: mostEnteredDataType,
            });
        } else {
            // Insert a new score
            await knex('sustainability_scores').insert({
                username: username,
                finalScore: totalScore,
                mostEnteredDataType: mostEnteredDataType,
            });
        }
    } catch (error) {
        console.error('Error in updateOrCreateSustainabilityScore:', error.message);
        throw error;
    }
};

const getAllSustainabilityScores = async () => {
    try {
        // Implement your logic to fetch all sustainability scores
        const scores = await knex('sustainability_scores').select('*');
        return scores;
    } catch (error) {
        console.error('Error in getAllSustainabilityScores:', error.message);
        throw error;
    }
};

const getAllUsers = async () => {
    try {
        // Implement logic to fetch all users from your 'users' table
        const users = await knex('users').select('*');
        return users;
    } catch (error) {
        console.error('Error in getAllUsers:', error.message);
        throw error;
    }
};

const calculateFinalScoreForAllUsers = async () => {
    try {
        const allUsers = await getAllUsers();

        console.log('All Users:', allUsers); // Log all users

        for (const user of allUsers) {
            console.log('Current User:', user.username); // Log current user
            const { totalScore, entryCount } = await calculateFinalScore(user.username);
            console.log(`User: ${user.username}, Entry Count: ${entryCount}, Total Score: ${totalScore}`);
        }

        console.log('Sustainability scores updated for all users.');
    } catch (error) {
        console.error('Error in calculateFinalScoreForAllUsers:', error.message);
        throw error;
    }
};

const calculateFinalScore = async (username) => {
    try {
        // Calculate the final score for the user
        const entryCount = await getEntryCountByUserId(username);
        console.log('Username:', username);
        console.log('Entry Count:', entryCount);

        const totalScore = entryCount * 10;
        console.log('Total Score:', totalScore);

        // Get the most entered data type for the user
        const mostEnteredDataType = await getMostEnteredDataTypeByUserId(username);
        console.log('Most Entered Data Type:', mostEnteredDataType);

        // Update or insert the sustainability score for the user
        await updateOrCreateSustainabilityScore(username, totalScore, mostEnteredDataType);

        return { totalScore, entryCount };
    } catch (error) {
        console.error('Error in calculateFinalScore:', error.message);
        throw error;
    }
};

module.exports = {
    getAllUsers,
    getEntryCountByUserId,
    updateOrCreateSustainabilityScore,
    getAllSustainabilityScores,
    getMostEnteredDataTypeByUserId,
    calculateFinalScoreForAllUsers,
};
