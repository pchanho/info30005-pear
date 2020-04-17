var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conversationSchema = new Schema({
    topic: {
    	type: String, 
    	required: true
    },
    topicImage: {
    	type: String
    },
    particpants: {
    	type: [String]
    },
    startTime: {
    	type:Number
    }
}, 

{collection: 'Conversations'}); //flagged -- is this needed?

mongoose.model('convesations', conversationSchema);

