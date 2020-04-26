/*
INFO30005 Group Assignment

Authors: Glenn Deevesh Aiden Gemma Dimitri
*/

const express = require('express');

// add our router
const conversationRoutes = express.Router();

/*

EXAMPLES

// i.e. get all authors
authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res));

// handle the GET request to get an author by using author ID
authorRouter.get('/:id', (req, res) => authorController.getAuthorByID(req, res));

*/


// require the conversation controller
const conversationController = require('../controllers/conversationControllers.js');

//create
conversationRoutes.post('/create', conversationController.createConversation);

// read all conversations and their items
conversationRoutes.get('/readAll', conversationController.readAllConversations);

// read all conversations new conversations that are not filled (readNewConversations) 
conversationRoutes.get('/readNew', conversationController.readNewConversations);

// read a single conversation and it's items
conversationRoutes.get('/readOne', conversationController.readOneConversation);

// read participants
conversationRoutes.get('/readParticipants', conversationController.readParticipants);

// update a single conversation's items
conversationRoutes.put('/update', conversationController.updateConversation);

// should we add " In " to our routes, i.e addParticipantsIn ?

conversationRoutes.put('/addParticipants', conversationController.addParticipantsInConversation);

conversationRoutes.put('/removeParticipants', conversationController.removeParticipantsInConversation);

conversationRoutes.put('/updateMessages', conversationController.updateMessagesInConversation);

//delete conversation by id
conversationRoutes.delete('/delete', conversationController.deleteConversation);

// export the router
module.exports = conversationRoutes;
