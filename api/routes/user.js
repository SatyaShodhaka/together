const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const { getProfile, getProfileById, sendProfileById, editProfile } = require('../controllers/user');
const { isLoggedIn } = require('../controllers/auth')


router.get('/profile', isLoggedIn, getProfile);
router.get('/profile/:id', isLoggedIn, getProfileById, sendProfileById )
router.post('/profile-edit', editProfile);

module.exports = router;