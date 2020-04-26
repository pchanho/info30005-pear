//import libraries
var mongoose = require('mongoose');

var Accounts = mongoose.model('accounts');

const bcrypt = require('bcrypt');


//function to handle a request - CRUD

//create account
var createAccount = function(req, res, next) {
    bcrypt.hash(req.body.password, 10, function (err,   hash) {
        var newAccount = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:hash,
            isValid:req.body.isValid,
        };

        var data = new Accounts(newAccount);
        data.save();

        res.redirect('/');
    });
};

// Read function

// Read all accounts
var readAllAccounts = function(req, res, next) {
    Accounts.find({}, function(err, doc) {
        if (err) {
          console.log(err);
        } else {
          res.json(doc);
        }
      });
};



// Update function
var readOneAccount = function(req, res, next) {
    var id = req.body.id;

    Accounts.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no account found');
        } else {
            res.json(doc);
        }
    });
}

// Update account
var updateAccount = function(req, res, next) {
    var id = req.body.id;

    Accounts.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no account found');
        }
        doc.firstName = req.body.firstName;
        doc.lastName = req.body.lastName;
        doc.email = req.body.email;
        doc.password = req.body.password;
        doc.isValid = req.body.isValid;
        /* add other params */
        doc.save();
    });
}

// Delete function
var deleteAccount = function(req, res, next) {
    var id = req.body.id;
    Accounts.findByIdAndRemove(id).exec();
    res.redirect('/');
};

//export the callbacks
module.exports = {
    createAccount,
    readOneAccount,
    readAllAccounts,
    updateAccount,
    deleteAccount
};
