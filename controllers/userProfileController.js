const userModel = require('../models/userProfileModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const getUserByUsername = async (username) => {
  try {
    const user = await userModel.getUserByUsername(username);
    return user;
  } catch (error) {
    console.error('Error in getUserByUsername:', error.message);
    throw error;
  }
};

const loginUser = async (credentials) => {
  try {
    const { username, password } = credentials;

    const user = await userModel.getUserByUsername(username);

    if (!user) {
      throw new Error('Invalid username or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid username or password');
    }

    const token = generateToken(user);
    const userType = await userModel.getUserType(username);

    return { user: { username, user_type: userType.user_type }, token };
  } catch (error) {
    throw new Error(error.message);
  }
};

const generateToken = (user) => {
  const payload = {
    username: user.username,
    // Add more user data to payload if needed
  };

  const secretKey = 'yourSecretKey'; // Replace with a secure secret key
  const options = { expiresIn: '1h' }; // Token expiration time

  const token = jwt.sign(payload, secretKey, options);

  return token;
};

const updateUser = async (username, updatedUserData) => {
  try {
    const updatedUser = await userModel.updateUser(username, updatedUserData);
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating user');
  }
};

const deleteUser = async (username, password) => {
  try {
    // Fetch user from the database based on username
    const user = await userModel.getUserByUsername(username);

    if (!user) {
      throw new Error('User not found');
    }

    // Compare password hash
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorrect password');
    }

    // Implement user deletion logic using the userModel
    await userModel.deleteUser(username);

    return { message: 'User deleted successfully' };
  } catch (error) {
    throw new Error('Error deleting user');
  }
};

module.exports = {
  loginUser,
  updateUser,
  deleteUser,
  getUserByUsername
};