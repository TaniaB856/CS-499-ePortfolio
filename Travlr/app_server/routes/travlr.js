var express = require('express');
var router = express.Router();

var ctrTravlr = require('../controllers/travlr');

router.get('/', ctrTravlr.travel);

module.exports = router;