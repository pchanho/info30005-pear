var user = require('../models/accountModels');

//require encryption

var mongoose = require('mongoose');

var Accounts = mongoose.model('accounts');

const bcrypt = require('bcrypt');

//function checks whether username and password is found within db
var login = function(req, res, next) {

    //find the email
    Accounts.findOne({
            email: req.body.email
    }) .then(function (user) {
        //checks if email found
        if (!user) {
            console.log("Email not found");
            res.redirect('/');
        }
        //if found check correct password 
        else {
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if (result == true) {
                    console.log("Logged in");
                    res.redirect('/');
                }
                else {
                    console.log("Incorrect password");
                    res.redirect('/');
                }
            });
        }
    });

};


//authenticate
var authenticate = function(req, res, next) {

}

module.exports = {
    login,
};
