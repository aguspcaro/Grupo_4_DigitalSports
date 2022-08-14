let { check } = require('express-validator');

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
    .isLength({ min: 6 })
    .withMessage('* Debes completar este campo')

];

module.exports = validationPerfilMiddleware;
