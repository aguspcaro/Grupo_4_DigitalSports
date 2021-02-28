let { check, body } = require('express-validator');
const db = require('../database/models');
const { userInfo } = require('os');

let validationRegisterMiddleware = [
  
  check('email').isEmail().withMessage('* Debes completar este campo con un email válido'),

  check('password')
    .isLength({ min: 8 })
    .withMessage('* La contraseña deberá ser mayor a 8 caracteres'),

  /* body('email').custom(function (value) {
    usuario = "";
    usuario = value;

    console.log(value);
    db.User.findOne({ where : { email: usuario } })

    .then(function(user) {

      console.log(user);

      if(user == null) {
        return false
      }

      

    }).catch(function(errno){console.log(errno)})
    
   
  }).withMessage('* Email ya existente') */

];

module.exports = validationRegisterMiddleware;
