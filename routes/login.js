var express = require('express');
var router = express.Router();

var loginControllers = require("../controllers/loginControllers")

/* GET home page. */
router.get('/', loginControllers.login);

module.exports = router;
