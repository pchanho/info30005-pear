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


// require the author controller
const conversationController = require('../controllers/conversationControllers.js');

//create
conversationRoutes.post('/create', conversationController.createConversation);

// read all conversations and their items
conversationRoutes.get('/readAll', conversationController.readAllConversations);

// update a single conversation's items
conversationRoutes.put('/update', conversationController.updateConversation);

//delete conversation by id
conversationRoutes.post('/delete', conversationController.deleteConversation);

// export the router 
module.exports = conversationRoutes;




