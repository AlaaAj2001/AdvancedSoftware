const sustainabilityScoreModel = require("../models/sustainabilityScoreModel");

// Calculate sustainability score based on environmental data and actions
const calculateSustainabilityScore = async (userId) => {
  // Placeholder logic - replace this with your actual calculation
  const environmentalData = await knex('environmental_data').where({ user_id: userId }).select('*');
  const actionsTaken = await knex('user_actions').where({ user_id: userId }).select('*');

  // Calculate score based on environmental data and actions
  let score = 0;

  // Example: Consider air quality, temperature, and actions taken as factors
  if (environmentalData.length > 0) {
    const averageAirQuality = environmentalData.reduce((sum, data) => sum + data.air_quality, 0) / environmentalData.length;
    const averageTemperature = environmentalData.reduce((sum, data) => sum + data.temperature, 0) / environmentalData.length;

    // Adjust score based on average air quality and temperature
    score += (averageAirQuality * 0.5 + averageTemperature * 0.5) / 2;
  }

  // Adjust score based on actions taken
  if (actionsTaken.length > 0) {
    const actionScore = actionsTaken.length * 10; // Placeholder value, adjust as needed
    score += actionScore;
  }

  // Update or insert the score into the sustainability_scores table
  await knex('sustainability_scores').update({ score }).where({ user_id: userId }).returning('*');

  return score;
};

// Controller function to get the sustainability score for a user
const getSustainabilityScore = async (req, res) => {
  const userId = req.params.userId; // Assuming the user ID is part of the request params

  try {
    // Call the function to calculate the sustainability score
    const score = await calculateSustainabilityScore(userId);

    res.status(200).json({ score });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getSustainabilityScore,
};
