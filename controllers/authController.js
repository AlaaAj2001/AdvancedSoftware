const authModel = require('../models/authModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (credentials) => {
  const { username, password } = credentials;

  // Fetch user from the database based on username
  const user = await authModel.getUserByUsername(username);

  if (!user) {
    throw new Error('Invalid username or password');
  }

  // Compare password hash
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Invalid username or password');
  }

  // Generate JWT token
  const token = generateToken(user);

  return { user, token };
};

const generateToken = (user) => {
  const payload = {
    userId: user.id,
    username: user.username,
    // Add more user data to payload if needed
  };

  const secretKey = 'yourSecretKey'; // Replace with a secure secret key
  const options = { expiresIn: '1h' }; // Token expiration time

  const token = jwt.sign(payload, secretKey, options);

  return token;
};

module.exports = {
  loginUser,
  // Other authentication-related functions like registerUser, logoutUser, etc.
};
