const knex = require('../knexfile');


const UserProfileModel = {
  createProfile: (userID, username, email, location, interests) => {
    return knex('user_profiles').insert({ user_id: userID, username, email, location, interests });
  },

  updateProfile: (userID, updates) => {
    return knex('user_profiles').where({ user_id: userID }).update(updates);
  },

  getProfileByUserID: (userID) => {
    return knex('user_profiles').where({ user_id: userID }).first();
  },

  getUsersBySimilarInterests: (userID) => {
    return knex('user_profiles')
      .select('user_id', 'username', 'location')
      .whereNot({ user_id: userID }) // Exclude the current user
      .andWhereRaw('interests IN (SELECT interests FROM user_profiles WHERE user_id = ?)', [userID]);
  },

  getUsersByLocation: (userID) => {
    return knex('user_profiles')
      .select('user_id', 'username', 'location')
      .whereNot({ user_id: userID }) // Exclude the current user
      .andWhereRaw('location = (SELECT location FROM user_profiles WHERE user_id = ?)', [userID]);
  },
};

module.exports = UserProfileModel;
