const User = require('../models/user')
const { check, validationResult } = require('express-validator')

exports.signup = (req, res) => {

    const validationErrs = validationResult(req);
    var validationRes = {errs:[]};

    for (i in validationErrs.errors) {
        validationRes.errs.push({msg:validationErrs.errors[i].msg,param:validationErrs.errors[i].param});
      }

    if(!validationErrs.isEmpty()) {
        return res.status(422).json({
            validationRes
        })
    }
    const user = new User(req.body); //user object of User Class
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err: "Failed to save the user"
            });
        }
        res.json({
            name: user.name,
            email: user.email,
            id: user._id
        });
    });
};

exports.signout = (req, res) => {
    res.json({
        message: "User signout"
    });
};
