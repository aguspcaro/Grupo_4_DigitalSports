let { check, body } = require('express-validator');
const db = require('../database/models');
const { userInfo } = require('os');


let validationRegisterMiddleware = [
  
  check('email').isEmail().withMessage('* Debes completar este campo con un email válido'),

  check('password')
    .isLength({ min: 8 })
    .withMessage('* La contraseña deberá ser mayor a 8 caracteres'),

  body('email').custom(value => {

    return db.User.findOne({where: { email: value}}).then(function(user) {
      if (user) {
        throw new Error(' * El email ya esta en uso');
      }
    })
    
  })
];

module.exports = validationRegisterMiddleware;
