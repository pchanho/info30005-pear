/*
INFO30005 Group Assignment

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

const express = require('express');

// add our router
const conversationRoutes = express.Router();

// require the conversation controller
const conversationController = require('../controllers/conversationControllers.js');

//CREATE

/*	
	route creates a new conversation expecting: topic
	Optionally, it can take the parameter: category, topicImage
	url: ../conversation/create
*/
conversationRoutes.post('/create', conversationController.createConversation);

//READ

/*	
	route gets all conversations and their associated information 
	and prints it to the console (no parameters required)
	url: ../message/readAll
*/
conversationRoutes.get('/readAll', conversationController.readAllConversations);

//READ

/*	
	route gets conversations that are not full and have at least one participant 
	and prints it to the console (no parameters required)
	url: ../message/readNew
*/
// read all conversations new conversations that are not filled (readNewConversations) 
conversationRoutes.get('/readNew', conversationController.readNewConversations);

//READ

/*	
    route gets a single conversation that is specified by the ID
    (used to display a single conversation to the front end once a user
    has selected it) This expects the parameter: id
	url: ../message/readOne
*/
// read all conversations new conversations that are not filled (readNewConversations) 
conversationRoutes.get('/readOne', conversationController.readOneConversation);

//READ

/*	
    route gets the participants in a conversation (specified by conversation id)
    This expects the parameter: id
	url: ../message/readParticipants
*/
// read all conversations new conversations that are not filled (readNewConversations) 

// read participants
conversationRoutes.get('/readParticipants', conversationController.readParticipants);

//READ

/*	
    route updates the record of current participants in a conversation
    when a participant joins, they are added to an array which tracks this
    This route expects the parameters: id (conversation_id) and
    participantsId (id of the person joining)
    This route also updates a record of conversations that a user has been in
	url: ../message/addParticipants
*/

// add participants

conversationRoutes.put('/addParticipants', conversationController.addParticipantsInConversation);

//READ

/*	
    route updates the record of current participants in a conversation
    when a participant leaves, they are removed from an array which tracks this
	This route expects the parameters: id (conversation_id) and
    participantsId (id of the person joining)
	url: ../message/removeParticipants
*/

// remove participants

conversationRoutes.put('/removeParticipants', conversationController.removeParticipantsInConversation);

//DELETE

/*	
	deletes a conversation from the database, given the parameter id
	url: ../conversation/delete
*/

//delete conversation by id
conversationRoutes.delete('/delete', conversationController.deleteConversation);

// export the router
module.exports = conversationRoutes;


