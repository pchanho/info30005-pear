var accountModel = require('../models/accountModels');

//require encryption
var bcrypt = require('bcrypt');

var login = function(req, res, next) {

    //gets the email and password
    //const email = req.body.email;
    //const password = req.body.password;

    //find the email
    const user = await accountModel.findOne({email: email})
    //if email not found
    if (!user) {
        throw new Error('Invalid login');
    }
    if (!user.confirmed) {
        throw new Error('Please confirm your email');
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        throw new Error('Invalid login');
    }

};

module.exports = {
    login,
};
