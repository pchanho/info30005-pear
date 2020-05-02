/*
INFO30005 Group Assignment - Pear: Report Model

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

//import required libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constants = require('../constants/reportConstants.js');

//create report schema
var reportSchema = new Schema({
    
    accountId: {
        type: Object,
        required: true
    },
    messageId: {
        type: Object,
    },
    reason: {
        type: String, 
        required: true
    },
    status: {
        type: Number,
        default: constants.PENDING,
    },
    outcome: {
        type: Number,
        default: constants.PENDING,
    }
}, 

// specify a specific name for the collection that the schema will appear in
{collection: 'Reports'}); 

// store conversation schema in mongoose
mongoose.model('reports', reportSchema);