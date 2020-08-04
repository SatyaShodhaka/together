const express = require('express');
const router = express.Router()

const { check, validationResult } = require('express-validator');

const { requestAdd, requestAlert, requestStatus } = require('../controllers/requester')

router.post('/requester-signup', requestAdd)

router.post('/requester-alert', requestAlert);

router.post('/requester-status', requestStatus);

module.exports = router;