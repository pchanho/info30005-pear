var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var supportSchema = new Schema({
        title: {
            type:String,
            required:true
        },

        body: {
            type:String,
            required:true
        },

        image: {
            type:String
        },

        video: {
            type:String
        },
    },
    {collection: 'Supports'});

mongoose.model('supports', supportSchema);
