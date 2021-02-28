let { check, body } = require('express-validator');
const db = require('../database/models');
let validationEditMiddleware = [

  check('email').isEmail().withMessage('* Debes completar este campo con una email válido'),

  check('password').isLength({ min: 8 }).withMessage('* La contraseña deberá ser mayor a 8 caracteres')

  /*body('email').custom(function (value) {

    let user = db.User.findAll({ where : { email: value } })

    console.log(user);

    let userDos = db.findByPk({where:{id: req.params.id}})

    console.log(userDos);
  
    if((user == value) && (user != userDos)) {
      console.log("salio bien");

      return true;
    } else {
      console.log("salio mal");
    }
   
  }).withMessage('* Email ya existente')*/

]

module.exports = validationEditMiddleware;