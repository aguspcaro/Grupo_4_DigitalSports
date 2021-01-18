const { check, validationResult, body} = require("express-validator");

let validationLogin = [
    check('emailLogin').isEmail().withMessage('* Este campo debe ser un email válido'),
    check('passwordLogin').isLength({min:8}).withMessage('* Contraseña Incorrecta')
]

module.exports = validationLogin;