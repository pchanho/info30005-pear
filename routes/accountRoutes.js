/*
INFO30005 Group Assignment - Pear: Account Router

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

//import required libraries
const express = require('express');
const accountRoutes = express.Router();
const accountController = require('../controllers/accountControllers');

//CREATE

/*  route creates an account expecting parameters; firstName, lastName,
    email, password and birthday, with password stored as a hash
    for security purposes
    url: ../account/create
*/
accountRoutes.post('/create', accountController.createAccount);

//READ

/*  route returns all accounts and account information and prints it to the
    console (takes no parameters)
    url: ../account/readAll
*/
accountRoutes.get('/readAll', accountController.readAllAccounts);

/*  route returns one account and its account information specified by a
    queried account id, if applicable
    url: ../account/readOne
*/
accountRoutes.get('/readOne', accountController.readOneAccount);

/*  route returns an array of friend ids specified by queried account id,
    if applicable
    url: ../account/readFriends
*/
accountRoutes.get('/readFriends', accountController.readFriends);

/*  route expects two parameters; email and password where the database is
    queried for a matching email, if found the password is then hashed and
    matched against the stored password. If matched, checks for the status
    of the account and responds accordingly (i.e. access granted or denied)
    url: ../account/login
*/
accountRoutes.get('/login', accountController.login);

//UPDATE

/*  route returns an account specified by a queried account id, and updates
    that account email address
    url: ../account/updateEmail
*/
accountRoutes.put('/updateEmail', accountController.updateEmail);

/*  route expects three parameters; id, current password and new password
    where the account specified by a queried account id, checks if the
    current password is matched to the stored password in the database, if
    matched allows new password to be updated
    url: ../account/updatePassword
*/
accountRoutes.put('/updatePassword', accountController.updatePassword);

/*  route returns an account specified by a queried account id, and updates
    that accounts first name and last name
    url: ../account/updateName
*/
accountRoutes.put('/updateName', accountController.updateName);

/*  route returns an account specified by a queried account id and changes
    the account status to deactive
    url: ../account/deactivate
*/
accountRoutes.put('/deactivate', accountController.deactivate);

/*  route returns an account specified by a queried account id and adds
    a friends id to the friends id array in the database if it is not
    already added
    url: ../account/addFriend
*/
accountRoutes.put('/addFriend', accountController.addFriend);

//DELETE

/*  route deletes an account specified by a queried account id from the
    database
    url: ../account/delete
*/
accountRoutes.delete('/delete', accountController.deleteAccount);

/*  route returns an account specified by a queried account id and removes
    that friends id from the friends id array in the database
    url: ../account/deleteFriend
*/
accountRoutes.delete('/deleteFriend', accountController.deleteFriend);


//export the account router
module.exports = accountRoutes;
