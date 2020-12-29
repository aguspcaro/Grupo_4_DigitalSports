var express = require('express');
var router = express.Router();

var detailControllers = require("../controllers/detailControllers")

/* GET home page. */
router.get('/', detailControllers.detail);

/* GET comprar un producto - este me genero dudas. No se hace este o si?*/
/*router.get("/buy", detailControllers.buy);*/

module.exports = router;
