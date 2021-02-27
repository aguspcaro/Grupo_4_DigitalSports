let { check, body } = require('express-validator');
const db = require('../database/models');
const { userInfo } = require('os');

let validationRegisterMiddleware = [
  
  check('email').isEmail().withMessage('* Debes completar este campo'),

  check('password')
    .isLength({ min: 8 })
    .withMessage('* La contraseña deberá ser mayor a 8 caracteres'),

/*   body('email').custom(function (value) {

    let user = db.User.findOne({ where : { email: value } })
  
    if(user == value) {

      return true;

    }
   
  }).withMessage('* Email ya existente') */

];

module.exports = validationRegisterMiddleware;
