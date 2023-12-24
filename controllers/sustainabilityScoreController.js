const sustainabilityScoreModel = require('../models/sustainabilityScoreModel');

const calculateFinalScoreForAllUsersAndRetrieve = async (req, res) => {
    try {
        await sustainabilityScoreModel.calculateFinalScoreForAllUsers();
        const scores = await sustainabilityScoreModel.getAllSustainabilityScores();
        res.status(200).json({ message: 'Sustainability scores calculated for all users.', scores });
    } catch (error) {
        console.error('Error in calculateFinalScoreForAllUsersAndRetrieve:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    calculateFinalScoreForAllUsersAndRetrieve,
};