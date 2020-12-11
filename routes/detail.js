var express = require('express');
var router = express.Router();

var detailControllers = require("../controllers/detailControllers")

/* GET home page. */
router.get('/', detailControllers.detail);

module.exports = router;
