/*
INFO30005 Group Assignment - Pear: Account Model

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// import libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constants = require('../constants/accountConstants.js');

//creating schema for database
var accountSchema = new Schema({
    firstName: {
    	type: String,
        required: true
    },
    lastName: {
    	type: String,
        required: true
    },
    email: {
    	type: String,
        required: true,
        unique: true
    },
    password: {
    	type: String,
        required: true
    },
    birthday: {
    	type: Date,
        required: true
    },
    //status types
        //1 active
        //2 inactive
        //3 banned
    userImage: {
        type: String
    },
    status: {
        type: Number,
        default: constants.ACTIVE
    },
    //array of report ids
    reportsHistoryId: {
        type: [{type: Object}],
    },
    //array of friend ids
    friendsId: {
        type: [{type: Object}],
    },
    //array of conversation ids
    conversationsId: {
        type: [{type: Object}],
    }
},

//names the schema
{collection: 'Accounts'});

mongoose.model('accounts', accountSchema);
