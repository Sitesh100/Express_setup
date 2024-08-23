const express = require('express');
const homePingController = require('../controllers/home.controller');

const router = express.Router(); // express router object

router.get('/custom', homePingController);

router.get('/customcoming', homePingController);

module.exports = router;