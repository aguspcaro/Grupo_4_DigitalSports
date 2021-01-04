var express = require('express');
var router = express.Router();
let usersControllers = require('../controllers/usersControllers');
const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, path.join('.', 'public', 'images', 'users'));
  },
  filename: function (req, file, cb) {
    return cb(null, Date.now() + path.extname(file.originalname));
  },
});
let uploads = multer({ storage: storage });

router.get("/", usersControllers.root);
router.get('/register', usersControllers.register);
router.post('/register', uploads.any(), usersControllers.registration);
router.get('/login', usersControllers.login);
router.post('/login', usersControllers.checkLogin);
router.post('/suscribe', usersControllers.suscribe); 

module.exports = router;
