/*
INFO30005 Group Assignment

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

const express = require('express');

// add our router
const conversationRoutes = express.Router();

// require the conversation controller
const conversationController = require('../controllers/conversationControllers.js');

//creates a conversation when a user hosts one 
//INPUT: {topic, category, topicImage}
//OUTPUT: {collection entry created under "Conversations" in Mongo}
conversationRoutes.post('/create', conversationController.createConversation);

// returns all conversations ()
conversationRoutes.get('/readAll', conversationController.readAllConversations);

// read all conversations new conversations that are not filled (readNewConversations) 
conversationRoutes.get('/readNew', conversationController.readNewConversations);

// read a single conversation and it's items
conversationRoutes.get('/readOne', conversationController.readOneConversation);

// read participants
conversationRoutes.get('/readParticipants', conversationController.readParticipants);

// should we add " In " to our routes, i.e addParticipantsIn ?

conversationRoutes.put('/addParticipants', conversationController.addParticipantsInConversation);

conversationRoutes.put('/removeParticipants', conversationController.removeParticipantsInConversation);

//delete conversation by id
conversationRoutes.delete('/delete', conversationController.deleteConversation);

// export the router
module.exports = conversationRoutes;
