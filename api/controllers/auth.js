const User = require('../models/user')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

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
                err: "User already exists or failed to save user"
            });
        }
        res.json({
            name: user.name,
            email: user.email,
            id: user._id
        });
    });
};

exports.login = (req, res) => {
    //do validation
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

    //authenticate
    const {email, password} = req.body;

    User.findOne({email}, (err, user) => {
        if(err || !user){
            return res.status(400).json({
                error: "User doesn't exist, please sign up."
            });
        }
        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and password do not match"
            });
        };
        //create and assign a token on succesful login
        const token = jwt.sign({_id: user._id},process.env.SECRET, { expiresIn: '1h' })
        //put token in cookie
        res.cookie("token", token);

        //send response to front end
        const {_id, name, email, role} = user;
        return res.json({token, user: {_id, name, email, role}})
    });

}

exports.logout = (req, res) => {
    res.clearCookie("token"),
    res.json({
        message: "User loggedout"
    });
};

//protected routes
exports.isLoggedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty: 'auth',
    algorithms: ['HS256']
});

//custom middlewares
exports.isAuthenticated = (req, res, next) => {
    let checker = req.profile && req.auth && req.profile._id === req.auth._id
    if (!checker) {
        return res.status(403).json({
            error: "ACCESS DENIED"
        });
    }
    next();
};

exports.isAdmin = (req, res, next) => {
    if(req.profile.role === 0) {
        return res.status(403).json({
            error: "You are not Admin, ACCESS DENIED"
        });
    }
    next();
};