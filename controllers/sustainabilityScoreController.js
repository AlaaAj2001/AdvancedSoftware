const knex = require('../knexfile');
const environmentalDataModel = require('../models/environmentalDataModel');

// Calculate sustainability score based on environmental data
const calculateSustainabilityScore = async (userId) => {
  try {
    // Count total entries
    const totalEntries = await environmentalDataModel.countUserEntries(userId);

    // Count most entered data type
    const mostEnteredDataType = await environmentalDataModel.getMostEnteredDataType(userId);

    // Calculate score (you can adjust this formula)
    const score = totalEntries * 5 + (mostEnteredDataType.counter || 0) * 10;

    // Update or insert the score into the sustainability_scores table
    await knex('sustainability_scores').update({
      user_id: userId,
      score,
      interest_about: mostEnteredDataType.data_type,
    }).where({ user_id: userId }).returning('*');

    return score;
  } catch (error) {
    throw new Error('Failed to calculate sustainability score');
  }
};

module.exports = {
  calculateSustainabilityScore,
};
