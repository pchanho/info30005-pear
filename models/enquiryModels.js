// // Import libraries
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
//
//
// // Create schema
// var enquirySchema = new Schema({
//         firstName: {
//             type:String,
//             required:true
//         },
//
//         lastName: {
//             type:String,
//             required:true
//         },
//
//         email: {
//             type:Date,
//             required:true
//         },
//
//         title: {
//             type:String,
//             required:true
//         },
//
//         body: {
//             type:String,
//             required:true
//         },
//
//         accountId: {
//             type:String
//         },
//
//         //Whether the enquiry is answered or not
//         status:{
//             type:Boolean,
//             required:true
//         }
//     },
//     {collection: 'Enquiries'});
//
// // Store schema
// mongoose.model('enquiries', enquirySchema);
