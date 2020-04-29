const express = require('express');

//add router
const accountRoutes = express.Router();

//require the account controller
const accountController = require('../controllers/accountControllers');

//handle the GET request on root of account-management path

//create
accountRoutes.post('/createAccount', accountController.createAccount);

//read
accountRoutes.get('/readAllAccounts', accountController.readAllAccounts);
accountRoutes.get('/readOneAccount', accountController.readOneAccount);
accountRoutes.get('/readFriends', accountController.readFriends);

//update
accountRoutes.put('/updateAccount', accountController.updateAccount);
accountRoutes.put('/deactivate', accountController.deactivate);

//delete
accountRoutes.delete('/deleteAccount', accountController.deleteAccount);
accountRoutes.post('/deleteFriend', accountController.deleteFriend);

//login
accountRoutes.post('/login', accountController.login);

accountRoutes.post('/addFriend', accountController.addFriend);


//export the router
module.exports = accountRoutes;
