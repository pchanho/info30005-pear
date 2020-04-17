var mongoose = require('mongoose');

const uri = "mongodb+srv://Glenn:123@pear-ox5gs.mongodb.net/test?retryWrites=true&w=majority";
/*need to put username, password*/


mongoose.connect(uri,
    function(err){
        if(!err){
            console.log('Connected to mongo.');
        }else{
            console.log('Failed to connect to mongo!', err);
        }
    });

    require('./conversationModels.js');
    require('./messageModels.js');
// require('');  need to modify
