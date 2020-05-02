/*
INFO30005 Group Assignment - Pear: Accounts Controller

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

//import required libraries
var mongoose = require('mongoose');
var Reports = mongoose.model('reports');
var Accounts = mongoose.model('accounts');
var Messages = mongoose.model('messages');
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

//read functions

// read all reports and their items
var readAllReports = function(req, res, next) {

    //find all reports and prints on screen
    Reports.find({}, function(err, doc) {
        if (err) {
          console.log('error, no report found');
        } else {
          res.json(doc);
        }
      });
};

// read one report
var readOneReport = function(req, res, next) {
    var id = req.body.id;

    //find report by Id and prints on screen
    Reports.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no report found');
        } else {
            res.json(doc);
        }
    });
};

// read by status, find all the PENDING or PROCESSED reports
// all possible values of status listed in reportConstants
var readByStatusReports = function(req, res, next) {
    status_to_find = req.body.status;

    //find report based on status value
    Reports.find({status:status_to_find}, function(err, doc) {
        if (err) {
          console.log('error, status not found');
        } else {
          res.json(doc);
        }
      });
};

// read by outcome, find either PENDING, BANNED, DELETED, IGNORED reports
// all possible values of outcome listed in reportConstants
var readByOutcomeReports = function(req, res, next) {
    outcome_to_find = req.body.outcome;

    //find report based on outcome value
    Reports.find({outcome:outcome_to_find}, function(err, doc) {
        if (err) {
          console.log('error, outcome not found');
        } else {
          res.json(doc);
        }
      });
};

//update functions

// update a single report's items
var updateReport = function(req, res, next) {
    var id = req.body.id;

    //find report by Id and change accountId, reason and messageId
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

//updating reports status
var updateStatusinReport = function(req, res, next) {
    var id = req.body.id;

    //find report by Id and change status of said report to PROCESSED (1)
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
var updateOutcomeinReport = function(req, res, next) {
    var id = req.body.id;

    //using inputed id, search the appropriate report
    Reports.findById(id, function(err, doc) {

        if (err) {
            console.error('error, no report found');
        }
        var accountId = doc.accountId;
        var messageId = doc.messageId;
        doc.outcome = req.body.outcome;
        
        //if outcome gives BANNED constant, proceed to ban account 
        if (doc.outcome == reportConstants.BANNED){
            //find account based on report's accountId
            Accounts.findById(accountId, function(err,doc){
                if (err){
                    console.log('error in ban');
                } else{
                    doc.status = accountConstants.BANNED;
                }
                doc.save();
            });
            // if outcome gives DELETED constant, proceed to delete said message
        } else if (doc.outcome == reportConstants.DELETED){
            //find message based on the report's messageId 
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

//add report to it's assign account by using accountId
var addReportToHistory = function(req, res, next) {
    var id = req.body.id;
    var accountId = req.body.accountId;
    
    //add report to an account's attribute, an array called reportHistoryId
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

//Delete report by id
var deleteReport = function(req, res, next) {
    var id = req.body.id;
    //find report by id and remove said report
    Reports.findByIdAndRemove(id).exec();
    res.redirect('/');
};

//export the callbacks
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