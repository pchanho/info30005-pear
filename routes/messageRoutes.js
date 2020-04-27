const express = require('express');

// add our router
const messageRoutes = express.Router();

// require the message controller
const messageController = require('../controllers/messageControllers.js');

// create message
messageRoutes.post('/create', messageController.createMessage);

// read all messages
messageRoutes.get('/readAll', messageController.readAllMessages);

// read all messages from a specific conversation 
// (for user history and admin purposes)
messageRoutes.get('/readSpecific', messageController.readSpecificMessages);

// read one message 
messageRoutes.get('/readOne', messageController.readOneMessage);

// update message
messageRoutes.put('/update', messageController.updateMessage);

// delete message by id
messageRoutes.delete('/delete', messageController.deleteMessage);

// export the router
module.exports = messageRoutes;