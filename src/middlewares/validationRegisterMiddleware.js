let { check, validationResult, body} = require("express-validator");
const path = require('path');
const fs = require("fs");
let validationRegisterMiddleware = [

  check("name").isLength({min: 2}).withMessage("* Debes completar este campo"),

  check("lastName").isLength({min: 3}).withMessage("* Debes completar este campo"),

  check("email").isEmail().withMessage("* Debes completar este campo"),

  check("password").isLength({min: 8}).withMessage("* Debes completar este campo"),

  check("edad").isLength({min: 8}).withMessage("* Debes completar este campo"),

  check("edad").isDate().isLength({min: 6}).withMessage("* Debes completar este campo"),
   
]

module.exports = validationRegisterMiddleware;