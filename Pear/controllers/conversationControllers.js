var mongoose = require('mongoose');

var Conversations = mongoose.model('conversations');

var Messages = mongoose.model('messages');






// C R U D

// Create Conversation

var createConversation = function(req, res, next) {
    var item = {
        topic:req.body.topic/*,
        topicImage:req.body.topicImage,
        particpants:req.body.particpants,
        startTime:req.body.startTime,
        */
    };

    var data = new Conversations(item);
    data.save();

    res.redirect('/');
};

/*
//Create (Conversation)
var createConversation = function(req, res, next) {
    var item = {
        name:req.body.name,
        address:req.body.address,
        distance:req.body.distance,
        rating:req.body.rating,
        photo:req.body.photo
    };

    var data = new Cafe(item);
    data.save();

    res.redirect('/');
};



// Read (exampe)
var findAllCafes = function(req, res, next) {
    Cafe.find()
        .lean()
        .then(function(doc) {
            res.render('index', {items: doc});
        });
};


// Update (exampe)
var updateCafe = function(req, res, next) {
    var id = req.body.id;

    Cafe.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no cafe found');
        }
        doc.name = req.body.name;
        doc.address = req.body.address;
        doc.distance = req.body.distance;
        doc.rating = req.body.rating;
        doc.photo = req.body.photo;
        doc.save();
    });
    res.redirect('/');
};

*/

//Delete Conversation by id
var deleteConversation = function(req, res, next) {
    var id = req.body.id;
    Conversation.findByIdAndRemove(id).exec();
    res.redirect('/');
};

/*

// Delete (exampe)
var deleteCafe = function(req, res, next) {
    var id = req.body.id;
    Cafe.findByIdAndRemove(id).exec();
    res.redirect('/');
};



//export functions (examples)
module.exports.findAllCafes = findAllCafes;
module.exports.createCafe = createCafe;
module.exports.updateCafe = updateCafe;
module.exports.deleteCafe = deleteCafe;
*/
module.exports.createConversation = createConversation;
module.exports.deleteConversation = deleteConversation;

