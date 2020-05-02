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

//read all
reportRoutes.get('/readAll', reportController.readAllReports);

// read one
reportRoutes.get('/readOne', reportController.readOneReport);

// read by status
reportRoutes.get('/readStatus', reportController.readByStatusReports);
reportRoutes.get('/readOutcome', reportController.readByOutcomeReports);

//update
reportRoutes.put('/update',reportController.updateReport);
reportRoutes.put('/updateStatus', reportController.updateStatusinReport);
reportRoutes.put('/updateOutcome', reportController.updateOutcomeinReport);

//delete
reportRoutes.delete('/delete', reportController.deleteReport);

// update reportsHistory
reportRoutes.put('/addReportHistory', reportController.addReportToHistory);

// export the router 
module.exports = reportRoutes;