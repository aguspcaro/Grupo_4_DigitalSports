var express = require('express');
var router = express.Router();

var registerControllers = require("../controllers/registerControllers")

/* GET home page. */
router.get('/', registerControllers.register);

module.exports = router;
