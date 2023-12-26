const userModel = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const createUser = async (userData) => {
  const { username, email, gender, dob, location, password, user_type } = userData;

  // Validate username format (e.g., only letters, numbers, and underscores allowed)
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(username)) {
    throw new Error('Invalid username format. Only letters, numbers, and underscores are allowed.');
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format. Please provide a valid email address.');
  }

  // Validate password complexity (e.g., minimum length, at least one uppercase letter, etc.)
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
  if (!passwordRegex.test(password)) {
    throw new Error('Invalid password format. Password must be at least 8 characters long and include at least one digit, one lowercase letter, one uppercase letter, and one special character.');
  }

  // Check if the email or username already exists
  const existingEmailUser = await userModel.getUserByEmail(email);
  const existingUsernameUser = await userModel.getUserByUsername(username);

  if (existingEmailUser) {
    throw new Error('Email is already registered');
  }

  if (existingUsernameUser) {
    throw new Error('Username is already taken');
  }

  // Hash the password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = {
    id: uuidv4(),
    username,
    email,
    gender,
    dob,
    location,
    user_type,
    password: hashedPassword,
    created_at: new Date().toISOString()
  };

  return await userModel.createUser(user);
};

module.exports = {
  createUser,
};
