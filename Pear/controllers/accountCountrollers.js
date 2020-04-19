var mongoose = require('mongoose');

var Account = mongoose.model('account');


//function to handle a request - CRUD

//create function
var createAccount = function(req, res, next) {
    var login = {
        username:req.body.topic,
        password:req.body.topic
    };

    var data = new Account(login);
    data.save();

    res.redirect('/');
};

// Read function
/*
var readAccount = function(req, res, next) {
    Account.find()
        .lean()
        .then(function(doc) {
            res.render('index', {items: doc});
        });
};
*/


// Update function
var updateAccount = function(req, res, next) {
    var id = req.body.id;

    Account.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no cafe found');
        }
        doc.username = req.body.username;
        doc.password = req.body.password;
        /* add other params */
        doc.save();
    });
    res.redirect('/');
};

// Delete function
var deleteAccount = function(req, res, next) {
    var id = req.body.id;
    Account.findByIdAndRemove(id).exec();
    res.redirect('/');
};

//export the callbacks
module.exports = {
    createAccount,
    deleteAccount
};
