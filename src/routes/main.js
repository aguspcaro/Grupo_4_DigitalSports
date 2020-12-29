var express = require('express');
var router = express.Router();

let mainControllers = require('../controllers/mainControllers');

/* GET home page. */
router.get('/', mainControllers.index);

/* GET Buscador Home page */
// router.get('/search', mainControllers.search);

module.exports = router;
