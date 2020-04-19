var express = require('express');

//add router
var accountRouters = express.Router();

//require the account controller
var accountControllers = require('../controller/accountControllers');

//handle the GET request on root of account-management path

accountRoutes.post('/create', accountController.createAccount);
accountRoutes.post('/read', accountController.readAccount);
accountRoutes.post('/update', accountController.updateAccount);
accountRoutes.post('/delete', accountController.deleteAccount);


//export the router
module.exports = accountRouters;
