var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    conversationId: {
        type: Object,
        required: true
    },
    sender: {
    	type: Object, 
        required: true
    },
    sentAt: {
        type: Date
    },
    text: {
    	type: String
    },
    image: {
        type: String
    },
    video: {
        type: String
    },

}, 

{collection: 'Messages'});

mongoose.model('messages', messageSchema);