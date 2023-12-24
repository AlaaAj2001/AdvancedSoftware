const messageModel = require('../models/messageModel');

const sendMessage = async (messageData) => {
  return await messageModel.sendMessage(messageData);
};

const fetchMessages = async (receiverUsernameOrEmail, receiverPassword) => {
  return await messageModel.fetchMessages(receiverUsernameOrEmail, receiverPassword);
};

module.exports = {
  sendMessage,
  fetchMessages,
};
