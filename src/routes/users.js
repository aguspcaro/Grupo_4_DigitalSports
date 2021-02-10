const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { check, validationResult, body } = require('express-validator');

// CONTROLADOR
const usersControllers = require('../controllers/usersControllers');

// MIDDLEWARES
const storage = require('../middlewares/storageMulterMiddleware');
const validationRegisterMiddleware = require('../middlewares/validationRegisterMiddleware');
const validationLogin = require('../middlewares/validationLoginMiddleware');
const uploads = multer({ storage: storage });
const userInSesion = require('../middlewares/userInSesionMiddleware');
const userOfSesion = require('../middlewares/userOFSesionMiddleware');
const validationEditMiddleware = require('../middlewares/validationEditMiddleware');
const cookiesRemember = require('../middlewares/rememberMiddleware');


// VISTA DEL CENTRO DE COMANDOS DEL USUARIO
router.get('/login/perfil', userOfSesion, cookiesRemember, usersControllers.root);
router.delete('/login/perfil/:id', usersControllers.delete);

// VISTA DE LA EDICION DEL USUARIO
router.get('/login/perfil/editar/:id', userOfSesion, cookiesRemember,  usersControllers.mostrarUsuario);
router.put('/login/perfil/editar/:id', uploads.any(), usersControllers.editUsuario);

// VISTA DE LA EDICION DEL PERFIL
router.get('/login/perfil/editarPerfil/:id', userOfSesion, cookiesRemember,  usersControllers.mostrarEdicionPerfil);
router.put('/login/perfil/editarPerfil/:id', uploads.any(), usersControllers.editPerfil);

// VISTA DE LA CREACION DEL PERFIL
router.get("/login/perfil/crearPerfil/:id", userOfSesion, cookiesRemember,  usersControllers.mostrarPerfil);
router.post("/login/perfil", uploads.any(), usersControllers.createPerfil);

// VISTA DEL REGISTRO DE USUARIO
router.get('/register', userInSesion, cookiesRemember, usersControllers.mostrarRegister);
router.post('/register', uploads.any(), usersControllers.createRegister);

// VISTA DEL LOGIN
router.get('/login', cookiesRemember, usersControllers.login);
router.post('/login', validationLogin, usersControllers.checkLogin);

 //VISTA DEL USUARIO LOGUEADO
router.get('/login/check', usersControllers.check);
router.get('/login/closed', usersControllers.closed);

// DATOS QUE VIENEN POR EL FORM DE SUSCRIBIRSE
router.post('/suscribe', usersControllers.suscribe);



module.exports = router;