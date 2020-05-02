/*
INFO30005 Group Assignment - Pear: Message Routes

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// import required libraries
const express = require('express');
const messageRoutes = express.Router();
const messageController = require('../controllers/messageControllers.js');

//CREATE

/*	
	route creates a new message expecting: conversationId, and senderId
	Optionally, it can take the parameters: text, image, video
	url: ../message/create
*/
messageRoutes.post('/create', messageController.createMessage);

//READ

/*	
	route gets all messages and their associated information 
	and prints it to the console (no parameters required)
	url: ../message/readAll
*/
messageRoutes.get('/readAll', messageController.readAllMessages);

/*	
	route gets all messages and their contents from a specific conversation
	this requires an input parameter of conversationID
	included for user history and admin purposes
	url: ../message/readSpecific
*/
messageRoutes.get('/readSpecific', messageController.readSpecificMessages);

/*	
	route gets one message its contents
	this requires an input parameter of messageID
	url: ../message/readOne
*/
messageRoutes.get('/readOne', messageController.readOneMessage);

//UPDATE

/*	
	route updates a message expecting the parameters: 
	conversationId, senderId, timeSent, text, image, video
	text image and video can be null
	this route is included for admin purposes and completeness
	url: ../message/update
*/
messageRoutes.put('/update', messageController.updateMessage);

//DELETE

/*	
	route deletes a specific message
	this requires an inpute parameter of id (messageId)
	url: ../message/delete
*/
messageRoutes.delete('/delete', messageController.deleteMessage);

// export the message router
module.exports = messageRoutes;