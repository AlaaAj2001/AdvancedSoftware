const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (credentials) => {
  const { username, email, password } = credentials;

  // Check if the user exists by username or email
  const user = username
    ? await userModel.getUserByUsername(username)
    : await userModel.getUserByEmail(email);

  if (!user) {
    throw new Error('Invalid username/email or password');
  }

  // Check if the password matches
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('Invalid username/email or password');
  }

  // Generate JWT token
  const token = generateToken(user);

  return { user, token };
};

const generateToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
    // Add more user data to the payload if needed
  };

  const token = jwt.sign(payload, 'yourSecretKey', { expiresIn: '1h' }); // Change 'yourSecretKey' to a secure secret key

  return token;
};

module.exports = {
  loginUser,
  // Other authentication functions (register, logout, etc.) if needed
};
