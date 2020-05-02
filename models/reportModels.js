var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var constants = require('../constants/reportConstants.js');


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

    //message ids
    messageId: {
        type: Object,
    },

    //array of report ids
    reportsHistoryId: {
        type: [{type: Object}],
    }

}, 

{collection: 'Reports'}); 

mongoose.model('reports', reportSchema);