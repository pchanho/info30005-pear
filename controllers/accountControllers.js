/*
INFO30005 Group Assignment - Pear: Account Controller

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// import required libraries
const mongoose = require('mongoose');
const Accounts = mongoose.model('accounts');
const bcrypt = require('bcrypt');
const constants = require('../constants/accountConstants.js')

// create account
var createAccount = function(req, res, next) {
    bcrypt.hash(req.body.password, 10, function (err, hash) {

        //parameters required to create an account
        var newAccount = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:hash,
            birthday:req.body.birthday,
        };

        var data = new Accounts(newAccount);
        data.save();
        console.log("account created");

        res.redirect('/');
    });
};

// read all accounts
var readAllAccounts = function(req, res, next) {

    //finds all accounts and prints to screen
    Accounts.find({}, function(err, doc) {
        if (err) {
          console.error('error, no accounts found');
        }
        else {
          res.json(doc);
        }
    });
};

// read one account
var readOneAccount = function(req, res, next) {
    var id = req.body.id;

    //finds account by an id and prints to screen
    Accounts.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no account found');
        } else {
            res.json(doc);
        }
    });
};

// update email
var updateEmail = function(req, res, next) {
    var id = req.body.id;

    //finds account by an id and updates email
    Accounts.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no account found');
        } else {
            doc.email = req.body.email;
            console.log('email updated');

            doc.save();
            res.redirect('/');
        }
    });
};

// update names (first and last name)
var updateName = function(req, res, next) {
    var id = req.body.id;

    //finds account by an id and updates name
    Accounts.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no account found');
        } else {
            doc.firstName = req.body.firstName;
            doc.lastName = req.body.lastName;
            console.log('name updated');

            doc.save();
            res.redirect('/');
        }
    });
};

// update password
var updatePassword = function(req, res, next) {
    var id = req.body.id;

    //finds account by an id and updates email
    Accounts.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no account found');
        } else {
            //check previous password
            bcrypt.compare(req.body.password, doc.password, function(err, result) {
                //passwords match
                if (result == true) {
                    //update new password
                    bcrypt.hash(req.body.newPassword, 10, function (err, hash) {
                        doc.password = hash;
                        console.log("password updated");

                        doc.save();
                        res.redirect('/');
                    });
                }
                else {
                    console.log("Incorrect password");
                }
            });
        }
    });
};

// delete account function
var deleteAccount = function(req, res, next) {
    var id = req.body.id;

    //find account by id and deletes
    Accounts.findByIdAndRemove(id).exec();
    console.log("account removed");

    res.redirect('/');
};

// deactivate an account
var deactivate = function(req, res, next) {
    var id = req.body.id;

    //finds account by id and updates the status to INACTIVE
    Accounts.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no account found');
        }

        doc.status = constants.INACTIVE;
        doc.save();
    });
    res.redirect('/');

};

// function checks whether username and password is found within database
// and provides access to the user if not banned
var login = function(req, res, next) {

    //find the email
    Accounts.findOne({ email: req.body.email }, function(err, user) {

        //checks if email found
        if (!user) {
            console.log("Email not found");
            res.redirect('/');
        }
        //if found check correct password
        else {
            bcrypt.compare(req.body.password, user.password, function(err, result) {

                //if password matches email
                if (result == true) {
                    //if account deactive, activate
                    if (user.status == constants.INACTIVE) {
                        user.status = constants.ACTIVE;
                        console.log("Account is active");
                        res.redirect('/');
                    }
                    //log in
                    else if (user.status == constants.ACTIVE) {
                        console.log("Logged in");
                        res.redirect('/');
                    }
                    //don't log in if banned account
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

//add a friend to the friends id array
var addFriend = function(req, res, next) {
    var id = req.body.id;
    var friendsId = req.body.friendsId;

    //update (add element) the friends id array of id (user) with a friends id
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

// read all friends from the friends id array
var readFriends = function(req, res, next) {
    var id = req.body.id;

    //find account by id and print all elements from the array
    Accounts.findById(id, 'friendsId', { lean: true }, function (err, doc) {
        if (err) {
            console.error('error, no friends found');
        } else {
            console.log("friends found");
            res.json(doc);
        }
    });
};

// delete a friend from the friends id array
var deleteFriend = function(req, res, next) {
    var id = req.body.id;
    var friendsId = req.body.friendsId;

    //find user by id and remove friends id from array if found
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
    updateEmail,
    updatePassword,
    updateName,
    deleteAccount,
    deactivate,
    login,
    addFriend,
    readFriends,
    deleteFriend,
};
