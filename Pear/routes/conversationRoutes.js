/* 
INFO30005 Group Assignment

Authors: Glenn Deevesh Aiden Gemma Dimitri
*/

const express = require('express');

// add our router
const conversationRoutes = express.Router();



// handle ???

/*

EXAMPLES

// i.e. get all authors
authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res));

// handle the GET request to get an author by using author ID
authorRouter.get('/:id', (req, res) => authorController.getAuthorByID(req, res));

*/


// handle ???


// handle ???


// require the author controller
const conversationController = require('../controllers/conversationControllers.js');


conversationRoutes.post('/create', conversationController.createConversation);
// export the router 
module.exports = conversationRoutes;