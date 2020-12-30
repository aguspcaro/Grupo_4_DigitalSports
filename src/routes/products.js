var express = require('express');
var router = express.Router();

let productsControllers = require('../controllers/productsControllers');

router.get('/', productsControllers.root);
router.put('/:id', productsControllers.edit);
router.delete('/:id', productsControllers.delete);
router.get('/cart', productsControllers.cart);
router.get('/detail/:id', productsControllers.detail);
router.get('/create', productsControllers.adm);
router.post('/create', productsControllers.createproduct);


module.exports = router;
