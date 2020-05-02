var mongoose = require('mongoose');

var Reports = mongoose.model('reports');

// var AccountControllers = require('../controllers/accountControllers.js');
var Accounts = mongoose.model('accounts');
var Messages = mongoose.model('messages');
// var Messages = require('../controllers/messageControllers.js');

var reportConstants = require('../constants/reportConstants.js');
var accountConstants = require('../constants/accountConstants.js');

// Create Reports
var createReport = function(req, res, next) {
    var item = {
        accountId:req.body.accountId,
        reason:req.body.reason,
        messageId: req.body.messageId
    };

    var data = new Reports(item);
    data.save();

    res.redirect('/');
};


// read all reports and their items
var readAllReports = function(req, res, next) {
    Reports.find({}, function(err, doc) {
        if (err) {
          console.log(err);
        } else {
          res.json(doc);
        }
      });
};

// read one report
var readOneReport = function(req, res, next) {
    var id = req.body.id;

    Reports.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no report found');
        } else {
            res.json(doc);
        }
    });
};

// read by status, find all the pending reports
// status = PENDING = 0
var readByStatusReports = function(req, res, next) {
    status_to_find = req.body.status;
    Reports.find({status:status_to_find}, function(err, doc) {
        if (err) {
          console.log('error, status not found');
        } else {
          res.json(doc);
        }
      });
};

// read by status, find all the processed reports
// status = PROCESSED = 1
var readByOutcomeReports = function(req, res, next) {
    outcome_to_find = req.body.outcome;
    Reports.find({outcome:outcome_to_find}, function(err, doc) {
        if (err) {
          console.log('error, outcome not found');
        } else {
          res.json(doc);
        }
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
        doc.messageId = req.body.messageId;
        doc.save();
    });
    res.redirect('/');
};

//change reports status
var updateStatusinReport = function(req, res, next) {
    var id = req.body.id;

    Reports.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no report found');
        }
        //status = PROCESSED = 1
        doc.status = reportConstants.PROCESSED;
        doc.save();
    });
    res.redirect('/');

};

//update outcome of report, 
//if outcome gives BANNED constant, proceed to ban account 
// if outcome gives DELETED constant, proceed to delete said message
var updateOutcomeinReport = function(req, res, next) {
    var id = req.body.id;
    
    console.log(req.body);
    console.log("reached updateOutcome");
    Reports.findById(id, function(err, doc) {
        
        var accountId = doc.accountId;
        var messageId = doc.messageId;

        if (err) {
            console.error('error, no report found');
        }
        doc.outcome = req.body.outcome;
        
        if (doc.outcome == reportConstants.BANNED){
            Accounts.findById(accountId, function(err,doc){
                if (err){
                    console.log('error in ban');
                } else{
                    doc.status = accountConstants.BANNED;
                }
                doc.save();
            });
        } else if (doc.outcome == reportConstants.DELETED){
            Messages.findByIdAndRemove(messageId, function(err,doc){
                if(err){
                    console.log('error in delete message')
                }
                doc.save();
            });
        }

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


//reportsHistory handlings below
//add report to it's assign account by using accountId

var addReportToHistory = function(req, res, next) {
    var id = req.body.id;
    var accountId = req.body.accountId;

    Accounts.updateOne(
        { "_id" : accountId },
        { $addToSet: { "reportsHistoryId" : id }}, function(err, doc) {
        if (err) {
            console.log("error adding");
        }
        else {
            console.log("add successful");
        }
    })
    res.redirect('/');
};

module.exports = {
    createReport,
    readAllReports,
    readOneReport,
    readByStatusReports,
    readByOutcomeReports,
    updateReport,
    updateStatusinReport,
    updateOutcomeinReport,
    deleteReport,
    addReportToHistory
};