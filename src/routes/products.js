var express = require('express');
var router = express.Router();

let productsControllers = require('../controllers/productsControllers');

router.get('/', productsControllers.root);
router.get('/cart', productsControllers.cart);
router.get('/detail', productsControllers.detail);
router.get('/adm', productsControllers.adm);

module.exports = router;
