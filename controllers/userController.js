const userModel = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const createUser = async (userData) => {
  const { username, email, gender, dob, location, password } = userData;

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
    password: hashedPassword,
    created_at: new Date().toISOString()
  };

  return await userModel.createUser(user);
};

module.exports = {
  createUser,
};
