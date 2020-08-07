const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const { getProfile, editProfile } = require('../controllers/user');
const { isLoggedIn } = require('../controllers/auth')
const { models } = require('mongoose');

router.get('/profile', isLoggedIn, getProfile);

router.post('/profile-edit', editProfile);

module.exports = router;