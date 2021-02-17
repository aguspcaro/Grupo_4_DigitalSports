const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// CONTROLADOR
const productsControllers = require('../controllers/productsControllers');

// MIDDLEWARES
const storage = require("../middlewares/storageMulterMiddleware");
const uploads = multer({storage: storage});

const userInSesion = require('../middlewares/userInSesionMiddleware');
const userOfSesion = require('../middlewares/userOFSesionMiddleware');

// VISTA DE LOS PRODUCTOS
router.get('/', productsControllers.root);

// VISTA DEL CARRITO DE COMPRA
router.get('/cart', productsControllers.cart);

// DEL DETALLE DEL PRODUCTO
router.get('/detail/:id', productsControllers.detail);

// PRODUCTOS Y SUS HERRAMIENTAS (EDITAR, ELIMINAR, CREAR)
router.get('/create', productsControllers.adm);
router.post('/create', uploads.any(), productsControllers.createproduct);
router.get('/vista/:id', productsControllers.modificar);
router.put('/:id', uploads.any(), productsControllers.edit);
router.delete('/delete/:id', productsControllers.delete);

module.exports = router;