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

// VISTA DEL USUARIO : SUS DATOS PARA MODIFICAR/ELIMINAR

router.get('/login/user', usersControllers.root);
router.delete('/login/user/:id', usersControllers.delete);
router.get(
  '/login/user/user-modificar/:id',
  userOfSesion,
  usersControllers.modificar
);
router.put(
  '/login/user/user-modificar/:id',
  validationEditMiddleware,
  uploads.any(),
  usersControllers.edit
);

// VISTA DEL REGISTRO DE USUARRIO
router.get('/register', userInSesion, usersControllers.register);
router.post('/register', uploads.any(), validationRegisterMiddleware, usersControllers.registration);

// VISTA DEL LOGIN
router.get('/login', userInSesion, usersControllers.login);
router.post('/login', validationLogin, usersControllers.checkLogin);

 //VISTA DEL USUARIO LOGUEADO
router.get('/login/check', usersControllers.check);

// DATOS QUE VIENEN POR EL FORM DE SUSCRIBIRSE
router.post('/suscribe', usersControllers.suscribe);

module.exports = router;
