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
    isValid: {
        type: Boolean,
        default: false
    },
    /* other fields */
},

//names the schema
{collection: 'Accounts'});

mongoose.model('accounts', accountSchema);
