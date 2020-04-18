var mongoose = require('mongoose');
// var Supports = mongoose.model('supports');
var supports = require('../models/supportModels');

//Read
const getSupportContents = function(req, res){
    res.send("<h1>Pear Support System</h1>");
    res.send(supports);
};

module.exports = {
    getSupportContents
};
