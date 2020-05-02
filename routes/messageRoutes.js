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
	also updates the corresponding conversation with information of the newly created
	message
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
	this requires an input parameter of conversationId
	included for user history and admin purposes
	url: ../message/readSpecific
*/
messageRoutes.get('/readSpecific', messageController.readSpecificMessages);

/*	
	route gets one message its contents
	this requires an input parameter of id (messageId)
	url: ../message/readOne
*/
messageRoutes.get('/readOne', messageController.readOneMessage);

//UPDATE

/*	
	route updates a message expecting the parameters: 
	text, image, video
	text image and video can be null
	url: ../message/update
*/
messageRoutes.put('/update', messageController.updateMedia);

//DELETE

/*	
	route deletes a specific message
	this requires an inpute parameter of id (messageId)
	url: ../message/delete
*/
messageRoutes.delete('/delete', messageController.deleteMessage);

// export the message router
module.exports = messageRoutes;