var express = require('express');
var router = express.Router();

var ctrMain = require('../controllers/main');

router.get('/', ctrMain.index);
router.get('/login', ctrMain.login);

module.exports = router;