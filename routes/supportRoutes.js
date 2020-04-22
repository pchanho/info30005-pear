var express = require('express');
var supportRoutes = express.Router();

var supportController = require('../controllers/supportControllers');

//This is a temporary home page as we don't create html yet.
supportRoutes.get('/', function(req, res, next) {
    res.send('<h1>Pear Support System</h1>');
});

//Create
supportRoutes.post('/insert', supportController.createSupport);

//Read
supportRoutes.get('/read',  supportController.getSupportContents);

//Update
supportRoutes.post('/update', supportController.updateSupport);

//Delete
supportRoutes.post('/delete', supportController.deleteSupport);


// export the router
module.exports = supportRoutes;