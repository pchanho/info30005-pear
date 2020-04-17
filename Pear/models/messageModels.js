var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    user: {
    	type: ObjectId, 
        required: true
    },
    time: {
        type: Date
    },
    message: {
    	type: [String]
    }
}, 

{collection: 'Messages'}); //flagged -- is this needed?

mongoose.model('messages', messageSchema);