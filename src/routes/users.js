const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { check, body } = require('express-validator');

// CONTROLADOR
const usersControllers = require('../controllers/usersControllers');

// MIDDLEWARES
const storage = require('../middlewares/storageMulterMiddleware');
const validationRegisterMiddleware = require('../middlewares/validationRegisterMiddleware');
const validationLogin = require('../middlewares/validationLoginMiddleware');
const uploads = multer({ storage: storage });
const userInSesion = require('../middlewares/userInSesionMiddleware');
const userOfSesion = require('../middlewares/userOFSesionMiddleware');
const validationEdit = require('../middlewares/validationEditMiddleware');
const cookiesRemember = require('../middlewares/rememberMiddleware');

// VISTA DEL CENTRO DE COMANDOS DEL USUARIO
router.get('/login/perfil', userOfSesion, cookiesRemember, userInSesion, usersControllers.root);
router.delete('/login/perfil/:id', usersControllers.delete);

// VISTA DE LA EDICION DEL USUARIO
router.get('/login/perfil/editar/:id',usersControllers.mostrarUsuario);
router.put('/login/perfil/editar/:id', uploads.any(), validationEdit, usersControllers.editUsuario);

// VISTA DE LA CREACION DEL PERFIL y EDICIÓN
router.get("/login/perfil/crearPerfil/:id", usersControllers.mostrarPerfil);
router.post("/login/perfil/:id", uploads.any(), usersControllers.createPerfil);

// VISTA DEL REGISTRO DE USUARIO
router.get('/register', userInSesion, cookiesRemember, userInSesion, usersControllers.mostrarRegister);
router.post('/register', uploads.any(), validationRegisterMiddleware, usersControllers.createRegister);

// VISTA DEL LOGIN
router.get('/login', cookiesRemember, userInSesion, usersControllers.login);
router.post('/login', validationLogin, usersControllers.checkLogin);

 //VISTA DEL USUARIO LOGUEADO
router.get('/login/check', usersControllers.check);
router.get('/login/closed', usersControllers.closed);

// DATOS QUE VIENEN POR EL FORM DE SUSCRIBIRSE
router.post('/suscribe', usersControllers.suscribe);



module.exports = router;