var express = require('express');
var router = express.Router();
var match_controller = require('../controllers/match');


router.post('/', match_controller.match);


module.exports = router;