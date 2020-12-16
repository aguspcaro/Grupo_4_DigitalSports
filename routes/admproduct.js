var express = require('express');
var router = express.Router();

var admproductControllers = require("../controllers/admproductControllers")

/* GET home page. */
router.get('/', admproductControllers.admproduct);

module.exports = router;