//import libraries
var mongoose = require('mongoose');
var Accounts = mongoose.model('accounts');


//function to handle a request - CRUD

//create account
var createAccount = function(req, res, next) {
    var newAccount = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        isValid:req.body.isValid,
    };

    var data = new Accounts(newAccount);
    data.save();

    res.redirect('/');
};

// Read all accounts
var readAllAccounts = function(req, res, next) {
    Accounts.find()
        .lean()
        .then(function(doc) {
            //res.render('accounts/readAll', {items: doc});
        });
};



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
    res.redirect('/');
};

// Delete function
var deleteAccount = function(req, res, next) {
    var id = req.body.id;
    Accounts.findByIdAndRemove(id).exec();
    res.redirect('/');
};

//export the callbacks
module.exports = {
    createAccount,
    readAllAccounts,
    updateAccount,
    deleteAccount,
};
