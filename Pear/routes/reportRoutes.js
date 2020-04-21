/* 
INFO30005 Group Assignment

Authors: Glenn Deevesh Aiden Gemma Dimitri
*/

const express = require('express');

// add our router
const reportRoutes = express.Router();

/*

EXAMPLES

// i.e. get all authors
authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res));

// handle the GET request to get an author by using author ID
authorRouter.get('/:id', (req, res) => authorController.getAuthorByID(req, res));

*/


// require the report controller
const reportController = require('../controllers/reportControllers.js');

//create
reportRoutes.post('/create', reportController.createReport);

//delete
reportRoutes.delete('/delete', reportController.deleteReport);

// export the router 
module.exports = reportRoutes;