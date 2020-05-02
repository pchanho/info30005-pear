/*
INFO30005 Group Assignment - Pear: Support Router

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

//Import libraries
var express = require('express');
var supportRoutes = express.Router();

//Require the support controller
var supportController = require('../controllers/supportControllers');

//This is a temporary home page for support system for deliverable 2.
supportRoutes.get('/', function(req, res, next) {
    res.send('<h1>Pear Support System</h1>');
});

//CREATE

/*  route creates an support content expecting parameters; title, body,
    ,video(optional), image(optional)
    url: ../support/create
 */
supportRoutes.post('/create', supportController.createSupport);

//READ

/*  route returns all support contents (take no parameters)
    url: ../support/readAll
 */
supportRoutes.get('/readAll',  supportController.readAllSupports);

/*  route returns one support content specified by a queried support id
    url: ../support/readOne
 */
supportRoutes.get('/readOne', supportController.readOneSupport);

//Update

/*  route updates title, body, video and image of support content
    specified by support id
    url: ../support/update
 */
supportRoutes.post('/update', supportController.updateSupport);

//Delete

/*  route deletes a support content specified by a queried support id
    from the database
    url: ../support/delete
 */
supportRoutes.delete('/delete', supportController.deleteSupport);

//Export the router
module.exports = supportRoutes;
