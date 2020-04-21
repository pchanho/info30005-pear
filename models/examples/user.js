/**
 * Sample model for User
 * 
 * 
 * 
 * 
 *
 **/

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

//model for user [TM Aug 20]
const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    familyName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: true,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateJoined: {
        type: Date,
        default: Date.now
    },
    imageReference: {
        type: String,
        default: "https://res.cloudinary.com/dducaeiio/image/upload/v1571534505/default_user_gcme3f.png"
    }
});

