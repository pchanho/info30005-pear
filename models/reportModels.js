/*
INFO30005 Group Assignment - Pear: Conversation Model

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

//import required libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var constants = require('../constants/reportConstants.js');

//create report schema
var reportSchema = new Schema({
    
    accountId: {
        type: Object,
        required: true
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
    },
    messageId: {
        type: Object,
    }

}, 

// specify a specific name for the collection that the schema will appear in
{collection: 'Reports'}); 

// store conversation schema in mongoose
mongoose.model('reports', reportSchema);