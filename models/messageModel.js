const bcrypt = require('bcrypt');
const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig);

const Message = {
  sendMessage: async (messageData) => {
    return await knex('messages').insert(messageData);
  },

  fetchMessages: async (receiverUsernameOrEmail, receiverPassword) => {
    // Retrieve the user's data based on their username or email
    const user = await knex('users').where('username', receiverUsernameOrEmail)
      .orWhere('email', receiverUsernameOrEmail).first();
      console.log(user.toString()); // Log the SQL query
    if (!user) {
      throw new Error('User not found');
    }

    // Implement password verification
    const passwordMatch = await bcrypt.compare(receiverPassword, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid password');
    }

    // Fetch messages for the receiver
    const messages = await knex('messages')
      .where('receiverUsernameOrEmail', user.username) // Update the column name to match your table
      .orWhere('receiverUsernameOrEmail', user.email) // Update the column name to match your table
      .select('senderUsernameOrEmail as sender', 'message', 'createdAt');

    return messages;
  },
};

module.exports = Message;
