// import libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    //status types
        //1 not verified
        //2 verified
        //3 inactive
        //4 bannned
    status: {
        type: Number,
        default: 1
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
