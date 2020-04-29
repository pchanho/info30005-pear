var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reportSchema = new Schema({
    
    account_id:{
        type: String,
        required: true
    },
    reason:{
        type: String, //are there better alternative what can we use for a dropdown list that we provide?
        required: true
    }
}, 

{collection: 'Reports'}); //flagged -- is this needed?

mongoose.model('reports', reportSchema);