const express = require('express');
const router = express.Router()
//need express import to create Router

const { check, validationResult } = require('express-validator')


//import controllers
const {signup,login,logout} = require('../controllers/auth')

router.post('/signup', [
    check('email').isEmail().withMessage('Not a valid email id'),
    check('password').isLength({min:8}).withMessage('Password must be atleast 8 characters')
], signup)

router.post('/login', [
    check('email').isEmail().withMessage('Not a valid email id'),
    check('password').isLength({min:8}).withMessage('Password must be atleast 8 characters')
], login)

router.get("/logout", logout);

module.exports = router;