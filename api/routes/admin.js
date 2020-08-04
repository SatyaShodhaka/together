const express = require('express');
const router = express.Router()

const { check, validationResult } = require('express-validator');

const { donorSignup, donorAlert, donorAvailability } = require('../controllers/donor')
const { isLoggedIn, isAdmin } = require('../controllers/auth');
const { requestersData, requestsData, donorsData, donationsData } = require('../controllers/admin')

router.get('/requests', isLoggedIn, isAdmin, requestsData);
router.get('/requesters', isLoggedIn, isAdmin, requestersData);
router.get('/donors', isLoggedIn, isAdmin, donorsData);
router.get('/donations', isLoggedIn, isAdmin, donationsData);

module.exports = router;