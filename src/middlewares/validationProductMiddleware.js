let { check, validationResult, body } = require('express-validator');


let validationProductMiddleware = [
  check('name')
    .isLength({ min: 4 })
    .withMessage('* Debes completar este campo'),

  check('description')
    .isLength({ min: 6 })
    .withMessage('* Debes completar este campo'),

    check('stock')
    .isNumeric({ min: 0})
    .withMessage('* Debe completar este campo y ser Numero Positivo'),

    check('category')
    .isLength({ min: 6 })
    .withMessage('* Debes completar este campo'),

    check('price')
    .isNumeric({ min: 0})
    .withMessage('* Debe completar este campo y ser Numero Positivo'),

    check('promPrice')
    .isNumeric({ min: 0})
    .withMessage('* Debe completar este campo y ser Numero Positivo'),

    check('size_id')
    .isNumeric({ min: 1})
    .withMessage('* Debe completar este campo y ser Numero Positivo'),
    check('brand_id')
    .isNumeric({ min: 1})
    .withMessage('* Debe completar este campo y ser Numero Positivo'),
    check('sport_id')
    .isNumeric({ min: 1})
    .withMessage('* Debe completar este campo y ser Numero Positivo'),

    check('public')
    .isLength({ min: 6 })
    .withMessage('* Debes completar este campo'),

    check('shipping')
    .isLength({ min: 6 })
    .withMessage('* Debes completar este campo'),

  
];

module.exports = validationProductMiddleware;
