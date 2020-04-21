var express = require('express');

//add router
var accountRoutes = express.Router();

//require the account controller
var accountController = require('../controllers/accountControllers');

//handle the GET request on root of account-management path

//create
accountRoutes.post('/create', accountController.createAccount);

//read
//accountRoutes.post('/read', accountController.readAccount);

//update
//accountRoutes.post('/update', accountController.updateAccount);

//delete
accountRoutes.post('/delete', accountController.deleteAccount);


//export the router
module.exports = accountRoutes;
