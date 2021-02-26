const { check, validationResult, body} = require("express-validator");

let validationLogin = [
    check('emailLogin').isEmail().withMessage('* Este campo debe ser un email válido'),
]

module.exports = validationLogin;