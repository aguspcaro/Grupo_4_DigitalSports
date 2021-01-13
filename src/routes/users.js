var express = require('express');
var router = express.Router();
let usersControllers = require('../controllers/usersControllers');
const multer = require('multer');
const path = require('path');
let { check, validationResult, body} = require("express-validator");
const fs = require("fs");

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
router.post('/register', uploads.any(), [

  check("name").isLength({min: 2}).withMessage("* Debes completar este campo name"),
  check("lastName").isLength({min: 3}).withMessage("* Debes completar este campo lastName"),
  check("email").isEmail().withMessage("* Debes completar este campo email"),
  check("password").isLength({min: 8}).withMessage("* Debes completar este campo password"),
  check("confirmPassword").isLength({min: 8}).withMessage("* Debes completar este campo confirmPassword"),
  body("email").custom(function (value) {
    let usersFilePath = path.join(__dirname, '../data/users.json')
    let usersJson = JSON.parse(fs.readFileSync(usersFilePath, {encoding: "utf-8"}));
    let users;
    if(usersJson == ""){
      users = [];
    } else {
      users = usersJson;
    }
    for(let i = 0; i < users.length; i++){
      if(users[i].email == value)
      return false;
    }
  }).withMessage("email ya existente")

] ,usersControllers.registration);
router.get('/login', usersControllers.login);
router.post('/login', usersControllers.checkLogin);
router.post('/suscribe', usersControllers.suscribe);
router.delete("/delete/:id", usersControllers.delete);
router.get("/vista/:id", usersControllers.modificar);
router.put("/:id", uploads.any(), usersControllers.edit);

module.exports = router;
