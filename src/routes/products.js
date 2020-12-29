var express = require('express');
var router = express.Router();

let productsControllers = require('../controllers/productsControllers');

/* GET home page. */

router.get('/', productsControllers.root);

/* router.get('/', admproductControllers.admproduct);
router.get('/', detailControllers.detail); */

module.exports = router;
