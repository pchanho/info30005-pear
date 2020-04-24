var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const NO_MEDIA = 0
const IMAGE = 1
const VIDEO = 2

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
    message: {
    	type: [String]
    },
    mediaAttached: {
        type: Number,
        default: NO_MEDIA
    },
    media: {
        type: String
    }
}, 

{collection: 'Messages'});

mongoose.model('messages', messageSchema);