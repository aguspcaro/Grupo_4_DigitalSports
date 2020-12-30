var express = require('express');
var router = express.Router();

let usersControllers = require('../controllers/usersControllers');

router.get('/register', usersControllers.register);

router.post('/register', usersControllers.registration);

router.get('/login', usersControllers.login);

/* router.post('/suscribe', usersControllers.suscribe); */

module.exports = router;
