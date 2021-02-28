const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {check} = require('express-validator')

// CONTROLADOR
const productsControllers = require('../controllers/productsControllers');

// MIDDLEWARES
const storage = require("../middlewares/storageMulterMiddleware");
const uploads = multer({storage: storage});

const userInSesion = require('../middlewares/userInSesionMiddleware');
const userOfSesion = require('../middlewares/userOFSesionMiddleware');




//checkeo de cada campo del formulario
let validator = [
    check('name').isLength({min:5}).withMessage('Debe ingresar un nombre.'),
    check('deporte').isInt().withMessage('Debe seleccionar un deporte.'),
    check('marca').isInt().withMessage('Debe seleccionar una marca.'),
    check('talle').isInt().withMessage('Debe seleccionar un talle.'),
    check('publico').isLength({min:3}).withMessage('Debe seleccionar el público objetivo.'),
    check('envio').isLength({min:3}).withMessage('Debe seleccionar las condiciones del envío.'),
    check('precio').isInt({min:0}).withMessage('Debe seleccionar un precio correcto.'),
    check('promocional').isInt({min:0}).withMessage('Debe seleccionar un precio correcto.'),
    check('categoria').isLength({min:3}).withMessage('Debe seleccionar una categoría.'),
    check('stock').isInt({min:0}).withMessage('Debe seleccionar el stock del producto.')
]


// VISTA DE LOS PRODUCTOS
router.get('/', userOfSesion,productsControllers.root);

// VISTA DEL CARRITO DE COMPRA
router.get('/cart', userOfSesion,productsControllers.cart);

// DEL DETALLE DEL PRODUCTO
router.get('/detail/:id', productsControllers.detail);

// PRODUCTOS Y SUS HERRAMIENTAS (EDITAR, ELIMINAR, CREAR)
router.get('/create', userOfSesion, productsControllers.adm);
router.post('/create', uploads.any(), validator, productsControllers.createproduct);
router.get('/vista/:id', userOfSesion, productsControllers.modificar);
router.put('/:id', uploads.any(), validator, productsControllers.edit);
router.delete('/delete/:id', productsControllers.delete);

module.exports = router;