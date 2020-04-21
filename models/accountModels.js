var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//creating schema for database
var accountSchema = new Schema({
    username: {
    	type: String,
        required: true
    },
    password: {
    	type: String,
        required: true
    },

    firstName: {
    	type: String,
        required: true
    },
    lastName: {
    	type: String,
        required: true
    },
    /* other fields */
},

//names the schema
{collection: 'Account'});

mongoose.model('account', accountSchema);
