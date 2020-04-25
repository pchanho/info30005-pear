const express = require('express');

//add router
const accountRoutes = express.Router();

//require the account controller
const accountController = require('../controllers/accountControllers');

//handle the GET request on root of account-management path

//create
accountRoutes.post('/create', accountController.createAccount);

//read
accountRoutes.get('/readAll', accountController.readAllAccounts);
accountRoutes.get('/readOne', accountController.readOneAccount);

//update
accountRoutes.put('/update', accountController.updateAccount);

//delete
accountRoutes.delete('/delete', accountController.deleteAccount);


//export the router
module.exports = accountRoutes;
