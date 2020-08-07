const User = require('../models/user');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

exports.getProfile = (req, res) => {

    //get the token from the
    var token;
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    }
    if(token == "") {
        return res.status(404).json({
            err:"User is not logged in"
        });
    }
    //get the id from the jwt

    const decoded = jwt.verify(token, process.env.SECRET);


    User.findOne({_id: decoded._id}, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "User doesn't exist."
            });
        }
        const {_id, name, email, role} = user;
        return res.json({token, user: {_id, name, email, role}})
    })
    
};

exports.profileId = (req, res) => {

};

exports.editProfile = (req, res) => {

};