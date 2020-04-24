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
// create constant for MAX_CONVERSATION_SIZE
// create constant for EMPTY CONVERSATION

// read a single conversation and it's items
conversationRoutes.get('/readOne', conversationController.readOneConversation);

// read participants
conversationRoutes.get('/readParticipants', conversationController.readParticipants);

// update a single conversation's items
conversationRoutes.put('/update', conversationController.updateConversation);

//delete conversation by id
conversationRoutes.delete('/delete', conversationController.deleteConversation);

// export the router
module.exports = conversationRoutes;
