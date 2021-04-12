let { check, validationResult, body } = require('express-validator');
const path = require('path');
const fs = require('fs');
let validationPerfilMiddleware = [
  check('first_name')
    .isLength({ min: 2 })
    .withMessage('* Debes completar este campo'),

  check('last_name')
    .isLength({ min: 3 })
    .withMessage('* Debes completar este campo'),

  check('age')
    .isLength({ min: 2 })
    .withMessage('* Debes completar este campo'),

  check('birthday')
    .isDate()
    .isLength({ min: 6 })
    .withMessage('* Debes completar este campo'),

];

module.exports = validationPerfilMiddleware;
