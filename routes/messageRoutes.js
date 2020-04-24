const express = require('express');

// add our router
const messageRoutes = express.Router();

// require the message controller
const messageController = require('../controllers/messageControllers.js');

// create message
messageRoutes.post('/create', messageController.createMessage);

// read all messages

// read all messages from a particular conversation 
// (for user history and admin purposes)

// read one message 

// update message

// delete message

// export the router
module.exports = messageRoutes;