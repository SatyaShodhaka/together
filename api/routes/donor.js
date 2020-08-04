const express = require('express');
const router = express.Router()

const { check, validationResult } = require('express-validator');

const { donorSignup, donorAlert, donorAvailability } = require('../controllers/donor')
const { isLoggedIn } = require('../controllers/auth');

// router.post('/donor-signup',[
//     // check() all the validations
// ], donorSignup)

// router.post('/donor-alert', donorAlert);

// router.post('/donor-status', donorAvailability);

module.exports = router;