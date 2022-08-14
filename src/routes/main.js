var express = require('express');
var router = express.Router();

let mainControllers = require('../controllers/mainControllers');

/* GET home page. */
router.get('/', mainControllers.index);

router.get('/mujer', mainControllers.mujer)
router.get('/hombre', mainControllers.hombre)
router.get('/chicos', mainControllers.chicos)
router.get('/sports', mainControllers.sports)
router.get('/brands', mainControllers.marcas)


/* GET Buscador Home page */
router.get('/search', mainControllers.search);


module.exports = router;
