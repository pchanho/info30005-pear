var mongoose = require('mongoose');
// var Supports = mongoose.model('supports');
var supports = require('../models/supportModels');

//Read
const getSupportContents = function(req, res){
    res.send(supports);
};

module.exports = {
    getSupportContents
};
