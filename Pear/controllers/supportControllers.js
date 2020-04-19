var mongoose = require('mongoose');
const Supports = mongoose.model('supports');



//Read
const getSupportContents = function(req, res){
    Supports.find()
        .lean()
        .then(function(doc) {
            res.render('index', {items: doc});
        });
    // res.send(supports);
};

module.exports = {
    getSupportContents
};
