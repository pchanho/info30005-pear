/*
INFO30005 Group Assignment - Pear: Accounts Router

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

//import required libraries
const express = require('express');
const accountRoutes = express.Router();
const accountController = require('../controllers/accountControllers');

//CREATE

/*  route creates an account expecting parameters; firstName, lastName,
    email, password and data of birth, with password stored as a hash
    for security purposes
    url: ../accounts/createAccount
*/
accountRoutes.post('/createAccount', accountController.createAccount);

//READ

/*  route returns all accounts and account information and prints it to the
    console (takes no parameters)
    url: ../accounts/readAllAccounts
*/
accountRoutes.get('/readAllAccounts', accountController.readAllAccounts);

/*  route returns one account and its account information specified by a
    queried account id, if applicable
    url: ../accounts/readOneAccount
*/
accountRoutes.get('/readOneAccount', accountController.readOneAccount);

/*  route returns an array of friend ids specified by queried account id,
    if applicable
    url: ../accounts/readFriends
*/
accountRoutes.get('/readFriends', accountController.readFriends);

/*  route expects two parameters; email and password where the database is
    queried for a matching email, if found the password is then hashed and
    matched against the stored password. If matched, checks for the status
    of the account and responds accordingly (i.e. acess granted or denied)
    url: ../accounts/login
*/
accountRoutes.get('/login', accountController.login);

//UPDATE

/*  route returns an account specified by a queired account id, and updates
    that account email address
    url: ../accounts/updateEmail
*/
accountRoutes.put('/updateEmail', accountController.updateEmail);

/*  route expects three parameters; id, current password and new password
    where the account specified by a queired account id, checks if the
    current password is matched to the stored password in the database, if
    matched allows new password to be updated
    url: ../accounts/updatePassword
*/
accountRoutes.put('/updatePassword', accountController.updatePassword);

/*  route returns an account specified by a queired account id, and updates
    that accounts first name and last name
    url: ../accounts/updateName
*/
accountRoutes.put('/updateName', accountController.updateName);

/*  route returns an account specified by a queired account id and changes
    the account status to deactive
    url: ../accounts/deactivate
*/
accountRoutes.put('/deactivate', accountController.deactivate);

/*  route returns an account specified by a queired account id and adds
    a friends id to the friends id array in the database if it is not
    already added
    url: ../accounts/addFriend
*/
accountRoutes.put('/addFriend', accountController.addFriend);

//DELETE

/*  route deletes an account specified by a queried account id from the
    database
    url: ../accounts/deleteAccount
*/
accountRoutes.delete('/deleteAccount', accountController.deleteAccount);

/*  route returns an account specified by a queired account id and removes
    that friends id from the friends id array in the database
    url: ../accounts/deleteFriend
*/
accountRoutes.delete('/deleteFriend', accountController.deleteFriend);


//export the account router
module.exports = accountRoutes;
