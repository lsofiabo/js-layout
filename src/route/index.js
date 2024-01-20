const express = require('express');
const router = express.Router();

const test = require('./test');
router.use('/', test);

const community = require('./community');
router.use('/', community);

module.exports = router;
