var mongoose = require('mongoose');
// var Supports = mongoose.model('supports');
// var supports = require('../models/supportModels');
const Supports = mongoose.model(supports);



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
