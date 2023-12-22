const UserProfileModel = require('../models/userProfileModel');

const UserProfileController = {
  createProfile: async (req, res) => {
    const { userID, username, email, location, interests } = req.body;

    try {
      await UserProfileModel.createProfile(userID, username, email, location, interests);
      res.status(201).json({ message: 'Profile created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProfile: async (req, res) => {
    const { userID } = req.params;
    const updates = req.body;

    try {
      await UserProfileModel.updateProfile(userID, updates);
      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getProfileByUserID: async (req, res) => {
    const { userID } = req.params;

    try {
      const profile = await UserProfileModel.getProfileByUserID(userID);
      res.status(200).json({ profile });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUsersBySimilarInterests: async (req, res) => {
    const { userID } = req.params;

    try {
      const similarInterestUsers = await UserProfileModel.getUsersBySimilarInterests(userID);
      res.status(200).json({ users: similarInterestUsers });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUsersByLocation: async (req, res) => {
    const { userID } = req.params;

    try {
      const usersInSameLocation = await UserProfileModel.getUsersByLocation(userID);
      res.status(200).json({ users: usersInSameLocation });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserProfileController;
