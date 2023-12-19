const sustainabilityScoreModel = require('../models/sustainabilityScore');

const calculateScore = async (userId) => {
  // Implement the logic to calculate the sustainability score based on user data
  const sustainabilityScore = /* Your calculation logic here */;

  // Update the user's record in the database with the calculated score
  await sustainabilityScoreModel.updateSustainabilityScore(userId, sustainabilityScore);

  return sustainabilityScore;
};

const getScore = async (userId) => {
  // Retrieve and return the user's sustainability score from the database
  const userData = await sustainabilityScoreModel.getSustainabilityScoreByUserId(userId);
  return userData.sustainabilityScore || 0;
};

module.exports = {
  calculateScore,
  getScore,
};
