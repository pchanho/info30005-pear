var mongoose = require('mongoose');

var Reports = mongoose.model('reports');

// Create Reports

var createReport = function(req, res, next) {
    var item = {
        accountId:req.body.accountId,
        reason:req.body.reason
    };

    var data = new Reports(item);
    data.save();

    res.redirect('/');
};


// read all reports and their items
var readAllReports = function(req, res, next) {
    Reports.find()
        .lean()
        .then(function(doc) {
            res.render('reports/readAll', {items: doc});
        });
};

// update a single report's items
var updateReport = function(req, res, next) {
    var id = req.body.id;

    Reports.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no report found');
        }
        doc.accountId = req.body.accountId;
        doc.reason = req.body.reason;
        doc.save();
    });
    res.redirect('/');
};

//Delete report by id
var deleteReport = function(req, res, next) {
    var id = req.body.id;
    Reports.findByIdAndRemove(id).exec();
    res.redirect('/');
};

module.exports.createReport = createReport;
module.exports.readAllReports = readAllReports;
module.exports.updateReport = updateReport;
module.exports.deleteReport = deleteReport;