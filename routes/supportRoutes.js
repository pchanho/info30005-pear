//Import libraries
var express = require('express');
var supportRoutes = express.Router();

//Require the support controller
var supportController = require('../controllers/supportControllers');

//This is a temporary home page for support system for deliverable 2.
supportRoutes.get('/', function(req, res, next) {
    res.send('<h1>Pear Support System</h1>');
});

//Create
supportRoutes.post('/insert', supportController.createSupport);

//Read all support contents
supportRoutes.get('/readAll',  supportController.readAllSupports);

//Read one support content
supportRoutes.get('/readOne', supportController.readOneSupport);

//Update
supportRoutes.post('/update', supportController.updateSupport);

//Delete
supportRoutes.delete('/delete', supportController.deleteSupport);

//Export the router
module.exports = supportRoutes;
