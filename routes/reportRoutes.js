/* 
INFO30005 Group Assignment

Authors: Glenn Deevesh Aiden Gemma Dimitri
*/

const express = require('express');

// add our router
const reportRoutes = express.Router();



// require the report controller
const reportController = require('../controllers/reportControllers.js');

//create
reportRoutes.post('/create', reportController.createReport);

//read
reportRoutes.get('/readAll', reportController.readAllReports);

//update
reportRoutes.put('/update',reportController.updateReport);

//delete
reportRoutes.delete('/delete', reportController.deleteReport);

// export the router 
module.exports = reportRoutes;