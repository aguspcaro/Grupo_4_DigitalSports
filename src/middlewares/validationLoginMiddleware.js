const { check, validationResult, body} = require("express-validator");

let validationLogin = [
    check('emailLogin').isEmail().withMessage('* Este campo debe ser un email válido'),
    check('passwordLogin').isLength({min:8}).withMessage('* La contraseña debe tener 8 caracteres como mínimo.')
]

module.exports = validationLogin;