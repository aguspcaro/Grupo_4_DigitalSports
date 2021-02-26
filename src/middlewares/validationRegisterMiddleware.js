let { check, validationResult, body } = require('express-validator');
const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const { userInfo } = require('os');

let validationRegisterMiddleware = [
  
  check('email').isEmail().withMessage('* Debes completar este campo'),

  check('password')
    .isLength({ min: 8 })
    .withMessage('* Debes completar este campo'),

  body('email')
    .custom(function (value) {

      if( 
      db.User.findOne({
        where : {
          email: value
        }
      }) ){
        return true;
      }
   
    })
    .withMessage('* Email ya existente'),
];

module.exports = validationRegisterMiddleware;
