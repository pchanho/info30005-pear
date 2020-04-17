var mongoose = require('mongoose');

const uri = "mongodb+srv://username:password@cluster0-bmldn.mongodb.net/INFO30005?retryWrites=true&w=majority";
/*need to put username, password*/


mongoose.connect(uri,
    function(err){
        if(!err){
            console.log('Connected to mongo.');
        }else{
            console.log('Failed to connect to mongo!', err);
        }
    });

// require('');  need to modify
