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
accountRoutes.put('/updateEmail', accountController.updateEmail);
accountRoutes.put('/updatePassword', accountController.updatePassword);
accountRoutes.put('/updateName', accountController.updateName);
accountRoutes.put('/deactivate', accountController.deactivate);
accountRoutes.put('/addFriend', accountController.addFriend);

//delete
accountRoutes.delete('/deleteAccount', accountController.deleteAccount);
accountRoutes.delete('/deleteFriend', accountController.deleteFriend);

//login
accountRoutes.post('/login', accountController.login);

//export the router
module.exports = accountRoutes;
