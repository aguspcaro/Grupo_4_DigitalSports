var express = require('express');
var router = express.Router();

var indexControllers = require("../controllers/indexControllers")

/* GET home page. */
router.get('/', indexControllers.index);

/* GET Buscador Home page */
router.get("/search", indexControllers.search);

/* GET Suscripción */
router.post("/suscribe", indexControllers.suscribe);

module.exports = router;
