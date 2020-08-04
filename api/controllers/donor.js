const User = require('../models/user');
const Donor = require('../models/donor');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const {isLoggedIn} = require('../routes/auth')

exports.donorSignup = (req, res, next) => {
    //get all the details of the donor
    //get the id of the user
    //set the role of the user as a donor
    //store the donor details and the details in Donor collection
    next();
};


//should be only accessed by the donors
exports.donorAlert = (req,res) => {
    //send notifications to all the requesters who need this plasma
};

exports.donorAvailablity = (req, res) => {
    //modify availability based on the req
}

exports.donorNotification = (req, res) => {
    //turn on or off notifications for the Donor user 
}

//loggedIn middleware

//middle ware for donors
exports.isDonor = (req, res, next) => {
    if(req.profile.role === 2) {
        return res.status(403).json({
            error: "You are not a donor, ACCESS DENIED"
        });
    }
    next();
};