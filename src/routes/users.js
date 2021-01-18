const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require("fs");
const multer = require('multer');

// CONTROLADOR
const usersControllers = require('../controllers/usersControllers');

// MIDDLEWARES
const storage = require("../middlewares/storageMulterMiddleware");
const validationRegisterMiddleware = require("../middlewares/validationRegisterMiddleware")
const validationLogin = require("../middlewares/validationLoginMiddleware");
const uploads = multer({ storage: storage });

// VISTA DEL USUARIO : SUS DATOS PARA MODIFICAR/ELIMINAR
router.get("/login/user/", usersControllers.root);
router.delete("/login/user/:id", usersControllers.delete);
router.get("/login/user/user-modificar/", usersControllers.modificar)
router.put("/login/user/user-modificar/:id", uploads.any(), usersControllers.edit);

//VISTA DEL REGISTRO DE USUARRIO
router.get('/register', usersControllers.register);
router.post('/register', uploads.any(), validationRegisterMiddleware, usersControllers.registration);

// VISTA DEL LOGIN
router.get('/login', usersControllers.login);
router.post('/login', validationLogin , usersControllers.checkLogin);

// VISTA DEL USUARIO LOGUEADO
router.get("/login/check", usersControllers.check)

// DATOS QUE VIENEN POR EL FORM DE SUSCRIBIRSE
router.post('/suscribe', usersControllers.suscribe);

module.exports = router;