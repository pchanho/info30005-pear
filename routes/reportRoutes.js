/* 
INFO30005 Group Assignment - Pear: Report Router

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

//import required libraries
const express = require('express');
const reportRoutes = express.Router();
const reportController = require('../controllers/reportControllers.js');

//CREATE

/*  route creates an account expecting parameters; accountId, 
    messageId (not required) and reason. It can also take status and outcome but
    both have a default value set for. 
    url: ../report/create
*/
reportRoutes.post('/create', reportController.createReport);

//READ

/*  route returns all reports and report information and prints it to the
    console (takes no parameters)
    url: ../report/readAll
*/
reportRoutes.get('/readAll', reportController.readAllReports);

/*  route returns one report and its report information specified by a
    queried report id, if applicable
    url: ../report/readOne
*/
reportRoutes.get('/readOne', reportController.readOneReport);

/*  route returns all reports with status that is 
    specified by queried status value,
    if applicable
    url: ../report/readStatus
*/
reportRoutes.get('/readStatus', reportController.readByStatusReports);

/*  route returns all reports with outcome that is 
    specified by queried outcome value,
    if applicable
    url: ../report/readOutcome
*/
reportRoutes.get('/readOutcome', reportController.readByOutcomeReports);

//UPDATE

/*  route returns a report specified by a queired report id, and updates
    its accountId, messageId and reason
    url: ../report/update
*/
reportRoutes.put('/update',reportController.updateReport);

/*  route returns a report specified by a queired report id, and updates
    its status changing the value from 0 to 1m PENDING to PROCESSED
    url: ../report/updateStatus
*/
reportRoutes.put('/updateStatus', reportController.updateStatusinReport);

/*  route returns a report specified by a queired report id, and updates
    the outcome value from outcome = 0 to the queried value
    if outcome == 1 == BANNED, proceeds to change the status of an account
    specified by the accountId attribute to be 3 == BANNED (accountConstants)
    if outcome == 2 == DELETED, proceeds to delete the message with the Id
    corresponding to the messageId attribute in reports
    if outcome == 3 == IGNORED, no further changes will be made
    url: ../report/updateOutcome
*/
reportRoutes.put('/updateOutcome', reportController.updateOutcomeinReport);

/*  route returns a reportId specified by a queired reportId and adds it to
    Accounts' attribute reportHistoryId which is an array that contain all the 
    reports that has been written in association to the accountId.
    The Account taken is specified by the accountId queried.
    Only add reportId if it is not already added
    url: ../report/addReportHistory
*/
reportRoutes.put('/addReportHistory', reportController.addReportToHistory);

//DELETE
/*  route deletes a report specified by a queried report id from the
    database
    url: ../report/delete
*/
reportRoutes.delete('/delete', reportController.deleteReport);

// export the router 
module.exports = reportRoutes;