var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var constants = require('../constants/reportConstants.js');


var reportSchema = new Schema({
    
    offendeeId: {
        type: Object,
        required: true
    },
    reason: {
        type: String, //are there better alternative what can we use for a dropdown list that we provide?
        required: true
    }
    // status


    // outcome
}, 

{collection: 'Reports'}); //flagged -- is this needed?

mongoose.model('reports', reportSchema);