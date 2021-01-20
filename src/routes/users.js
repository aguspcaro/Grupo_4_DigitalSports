const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require("fs");
const multer = require('multer');
const { check, validationResult, body} = require("express-validator");

// CONTROLADOR
const usersControllers = require('../controllers/usersControllers');

// MIDDLEWARES
const storage = require("../middlewares/storageMulterMiddleware");
const validationRegisterMiddleware = require("../middlewares/validationRegisterMiddleware")
const validationLogin = require("../middlewares/validationLoginMiddleware");
const uploads = multer({ storage: storage });
const userPermisos = require('../middlewares/userLogueadoMiddleware');
const userPermited = require('../middlewares/permitedMiddleware');
const validationEditMiddleware = require("../middlewares/validationEditMiddleware");

// VISTA DEL USUARIO : SUS DATOS PARA MODIFICAR/ELIMINAR
router.get("/login/user/", usersControllers.root);
router.delete("/login/user/:id", usersControllers.delete);
router.get("/login/user/user-modificar/:id", userPermited,usersControllers.modificar)
router.put("/login/user/user-modificar/:id", [
    
    check("name").isLength({min:2}).withMessage("* Debes completar este campo"),
    check("email").isEmail().withMessage("* Debes completar este campo")

], uploads.any(), usersControllers.edit);

// VISTA DEL REGISTRO DE USUARRIO
router.get('/register', userPermisos, usersControllers.register);
router.post('/register', uploads.any(), validationRegisterMiddleware, usersControllers.registration);

// VISTA DEL LOGIN
router.get('/login', userPermisos , usersControllers.login);
router.post('/login', validationLogin , usersControllers.checkLogin);

// VISTA DEL USUARIO LOGUEADO
router.get("/login/check", usersControllers.check)

// DATOS QUE VIENEN POR EL FORM DE SUSCRIBIRSE
router.post('/suscribe', usersControllers.suscribe);

module.exports = router;