/*
INFO30005 Group Assignment - Pear: Account Controller

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// import required libraries
//config required for cloudinary
var cloudinary = require("cloudinary");
cloudinary.config({
    cloud_name: 'drvfo389c',
    api_key: '313182327497513',
    api_secret: 'mXEiPcfHOlFtlB8eRQSAH6h6j18'
});
const mongoose = require('mongoose');
const Accounts = mongoose.model('accounts');
const bcrypt = require('bcrypt');
const constants = require('../constants/accountConstants.js');
const defaultImage = "https://res.cloudinary.com/drvfo389c/image/upload/v1589694061/pear/profile_hdtz1k.png"

// create account
var createAccount = async function(req, res, next) {
    //creates account profile image if available
    console.log(req.body)
    if (req.body.userImage!= 'undefined') {
        await cloudinary.v2.uploader.upload(req.files.userImage.tempFilePath, (error, result) => {
            if(result)
            {
                userImage = result.url
            } else if(error) {
                userImage = defaultImage
            }
        })
    }
    else{
        userImage = defaultImage
    }

    bcrypt.hash(req.body.password, 10, function (err, hash) {

        //parameters required to create an account
        var newAccount = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:hash,
            birthday:req.body.birthday,
            userImage:userImage
        };

        var data = new Accounts(newAccount);
        data.save();
        //console.log("account created");

        res.send('True');
    });
};

// read all accounts
var readAllAccounts = function(req, res, next) {

    //finds all accounts and prints to screen
    Accounts.find({}, function(err, doc) {
        if (err || doc == undefined) {
          console.error('error, no accounts found');
        }
        else {
          res.json(doc);
        }
    });
};

// read one account
var readOneAccount = function(req, res, next) {
    var accountId = req.body.accountId;
    console.log(req.body)
    console.log(accountId)
    //finds account by an id and prints to screen
    Accounts.findById(accountId, function(err, doc) {
        if (err || doc == undefined) {
            console.error('error, no account found');
        } else {
            res.send(doc);
        }
    });
};

// update email
var updateEmail = function(req, res, next) {
    var id = req.body.id;

    //finds account by an id and updates email
    Accounts.findById(id, function(err, doc) {
        if (err || doc == undefined) {
            console.error('error, no account found');
        } else {
            doc.email = req.body.email;
            //console.log('email updated');

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
        if (err || doc == undefined) {
            console.error('error, no account found');
        } else {
            doc.firstName = req.body.firstName;
            doc.lastName = req.body.lastName;
            //console.log('name updated');

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
        if (err || doc == undefined) {
            console.error('error, no account found');
        } else {
            //check previous password
            bcrypt.compare(req.body.password, doc.password, function(err, result) {
                //passwords match
                if (result == true) {
                    //update new password
                    bcrypt.hash(req.body.newPassword, 10, function (err, hash) {
                        doc.password = hash;
                        //console.log("password updated");

                        doc.save();
                        res.redirect('/');
                    });
                }
                else {
                    console.error("Incorrect password");
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
    //console.log("account removed");

    res.redirect('/');
};

// deactivate an account
var deactivate = function(req, res, next) {
    var id = req.body.id;

    //finds account by id and updates the status to INACTIVE
    Accounts.findById(id, function(err, doc) {
        if (err || doc == undefined) {
            console.error('error, no account found');
        } else {
        	doc.status = constants.INACTIVE;
        	doc.save();
        }
        doc.status = constants.INACTIVE;
        doc.save();
    });
    res.redirect('/');

};

// function checks whether username and password is found within database
// and provides access to the user if not banned
var login = function(req, res, next) {
    console.log(req.body) 
    //find the email
    Accounts.findOne({ email: req.body.email }, function(err, user) {

        //checks if email found
        if (!user) {
            console.error("Email not found");
            res.json("False");
            return false;
        }
        //if found check correct password
        else {
            bcrypt.compare(req.body.password, user.password, function(err, result) {

                //if password matches email
                if (result == true) {
                    //if account deactive, activate
                    if (user.status == constants.INACTIVE) {
                        user.status = constants.ACTIVE;
                        //console.log("Account is active");
                        res.send(user._id);
                        return true;
                    }
                    //log in
                    else if (user.status == constants.ACTIVE) {
                        //console.log("Logged in");
                        res.send(user._id);
                        return true;
                    }
                    //don't log in if banned account
                    else {
                        //console.log("Account is banned");
                        res.send("False");
                        return false;
                    }
                }
                else {
                    console.error("Incorrect password");
                    res.send("False");
                    return false;
                }
                user.save();
            });
        }
    });
    return false;
    

};

//add a friend to the friends id array
var addFriend = function(req, res, next) {
    var id = req.body.id;
    var friendsId = req.body.friendsId;

    //update (add element) the friends id array of id (user) with a friends id
    Accounts.updateOne(
        { "_id" : id },
        { $addToSet: { "friendsId" : friendsId }}, function(err, doc) {
        if (err || doc == undefined) {
            console.error("error adding");
        }
    })
    res.redirect('/');
};

// read all friends from the friends id array
var readFriends = function(req, res, next) {
    var id = req.body.id;

    //find account by id and print all elements from the array
    Accounts.findById(id, 'friendsId', { lean: true }, function (err, doc) {
        if (err || doc == undefined) {
            console.error('error, no friends found');
        } else {
            //console.log("friends found");
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
        if (err || doc == undefined) {
            console.error("error removing");
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
