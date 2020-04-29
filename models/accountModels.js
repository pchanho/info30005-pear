// import libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var constants = require('../constants.js')

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
    status: {
        type: Number,
        default: constants.NOT_VERIFIED
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
