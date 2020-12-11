var express = require('express');
var router = express.Router();

var cartControllers = require("../controllers/cartControllers")

/* GET home page. */
router.get('/', cartControllers.cart);

module.exports = router;
