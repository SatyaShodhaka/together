const User = require('../models/user');
const Requester = require('../models/requester');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.requestAdd = (req, res) => {
    //get the request details and store in the db along with the user id
};


exports.requestAlert = (req, res) => {
    //turn on or off requester notifications
};

exports.requestStatus = (req, res) => {
    //mark the request as complete
};

exports.requestList = (req, res) => {
    //send all the requests made by the requester
};

//middle ware for requester
