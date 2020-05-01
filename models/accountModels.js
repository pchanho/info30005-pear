// import libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var constants = require('../constants/accountConstants.js')

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
        //1 not verified
        //2 inactive
        //3 active
        //4 bannned
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
    /* other fields */
},

//names the schema
{collection: 'Accounts'});

mongoose.model('accounts', accountSchema);
