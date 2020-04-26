const express = require('express');

//add router
const loginRoutes = express.Router();

//require the account controller
const loginController = require('../controllers/loginControllers');

//functions
loginRoutes.post('/login', loginController.login);


module.exports = loginRoutes;
