var mongoose = require('mongoose');

var Reports = mongoose.model('reports');

// var AccountControllers = require('../controllers/accountControllers.js');
var Accounts = mongoose.model('accounts');
var Messages = mongoose.model('messages');
// var Messages = require('../controllers/messageControllers.js');



var reportConstants = require('../constants/reportConstants.js');
var accountConstants = require('../constants/accountConstants.js');

// var ban = function(req, res, next) {
//     var id = req.body.id;

//     Accounts.findById(id, function(err, doc) {
//         if (err) {
//             console.error('error, no account found');
//         }
//         //status 4 is banned
//         doc.status = 4;
//         doc.save();
//     });
//     res.redirect('/');
// };

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
var readPendingReports = function(req, res, next) {
    Reports.find({status:reportConstants.PENDING}, function(err, doc) {
        if (err) {
          console.log(err);
        } else {
          res.json(doc);
        }
      });
};

// read by status, find all the processed reports
// status = PROCESSED = 1
var readProcessedReports = function(req, res, next) {
    Reports.find({status:reportConstants.PROCESSED}, function(err, doc) {
        if (err) {
          console.log(err);
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
                
            });
        } else if (doc.outcome == reportConstants.DELETED){
            Messages.findByIdAndRemove(messageId, function(err,doc){
                if(err){
                    console.log('error in delete message')
                }
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

// //change report outcomes
// //to band account
// var outcomeBanned = function(req, res, next) {
//     var id = req.body.id;

//     Reports.findById(id, function(err, doc) {
//         if (err) {
//             console.error('error, no account found');
//         }
//         //outcome = BANNED = 1
//         doc.outcome = constants.BANNNED;
//         doc.save();
//     });
//     res.redirect('/');

// };

// //to delete message
// var outcomeDeleted = function(req, res, next) {
//     var id = req.body.id;

//     Reports.findById(id, function(err, doc) {
//         if (err) {
//             console.error('error, no account found');
//         }
//         //outcome = DELETED = 2
//         doc.outcome = constants.DELETED;
//         doc.save();
//     });
//     res.redirect('/');

// };

// //to resolve without any repercussions
// var outcomeIgnored = function(req, res, next) {
//     var id = req.body.id;

//     Reports.findById(id, function(err, doc) {
//         if (err) {
//             console.error('error, no account found');
//         }
//         //outcome = IGNORED = 3
//         doc.outcome = constants.IGNORED;
//         doc.save();
//     });
//     res.redirect('/');

// };


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
    readPendingReports,
    readProcessedReports,
    updateReport,
    updateStatusinReport,
    updateOutcomeinReport,
    deleteReport,
    addReportToHistory
};