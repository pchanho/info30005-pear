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
            birthday:req.body.birthday,
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
        }
        else {
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
        doc.birthday = req.body.birthday;
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

var deactivate = function(req, res, next) {
    var id = req.body.id;

    Accounts.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no account found');
        }
        //status 2 is deactivated
        doc.status = 2;
        doc.save();
    });
    res.redirect('/');

};

//function checks whether username and password is found within db
var login = function(req, res, next) {

    //find the email
    Accounts.findOne({
            email: req.body.email
    }, function(err, user) {
        //checks if email found
        if (!user) {
            console.log("Email not found");
            res.redirect('/');
        }
        //if found check correct password
        else {
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                //1 not verified
                //2 inactive
                //3 active
                //4 bannned
                if (result == true) {
                    //don't log in if banned account
                    if (user.status == 1) {
                        console.log("Account hasn't been verified");
                        res.redirect('/');
                    }
                    //if account deactive, activate
                    else if (user.status == 2) {
                        console.log(user);
                        var newStatus = 3;
                        user.status = newStatus;
                        console.log(user);
                        //console.log("Account is active");
                        res.redirect('/');
                    }
                    //log in
                    else if (user.status == 3) {
                        console.log("Logged in");
                        res.redirect('/');
                    }
                    //status is 4 account is banned
                    else {
                        console.log("Account is banned");
                        res.redirect('/');
                    }
                }
                else {
                    console.log("Incorrect password");
                    res.redirect('/');
                }
                user.save();
            });
        }
    });

};

var addFriend = function(req, res, next) {
    var id = req.body.id;
    var friendsId = req.body.friendsId;

    Accounts.updateOne(
        { "_id" : id },
        { $addToSet: { "friendsId" : friendsId }}, function(err, doc) {
        if (err) {
            console.log("error adding");
        }
        else {
            console.log("add successful");
        }
    })
    res.redirect('/');
};

// read friends
var readFriends = function(req, res, next) {
    var id = req.body.id;

    Accounts.findById(id, 'friendsId', { lean: true }, function (err, doc) {
        if (err) {
            console.error('error, no friends found');
        } else {
            console.log("friends found");
            res.json(doc);
        }
    });
};

var deleteFriend = function(req, res, next) {
    var id = req.body.id;
    var friendsId = req.body.friendsId;

    Accounts.updateOne(
        { "_id" : id },
        { $pull: { "friendsId" : friendsId }}, function(err, doc) {
        if (err) {
            console.log("error removing");
        }
        else {
            console.log("remove successful");
        }
    })
    res.redirect('/');
};

//export the callbacks
module.exports = {
    createAccount,
    readOneAccount,
    readAllAccounts,
    updateAccount,
    deleteAccount,
    deactivate,
    login,
    addFriend,
    readFriends,
    deleteFriend,
};
