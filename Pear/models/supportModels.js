var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var supportSchema = new Schema({
        title: String,

        body: String,

        image: String,

        video: String,
    },
    {collection: 'Supports'});

mongoose.model('supports', supportSchema);
