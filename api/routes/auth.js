var express = require('express');
var router = express.Router()
const { check, validationResult } = require('express-validator')
//import controllers
const {signup,signout} = require('../controllers/auth')

router.get("/signout", signout);

router.post('/signup', [
    check('email').isEmail().withMessage('Not a valid email id'),
    check('password').isLength({min:8}).withMessage('Password must be atleast 8 characters')
], signup)


module.exports = router;