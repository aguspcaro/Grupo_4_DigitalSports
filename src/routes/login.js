var express = require('express');
const { login } = require('../controllers/loginControllers');
var router = express.Router();

var loginControllers = require("../controllers/loginControllers")

/* GET home page. */
router.get('/', loginControllers.login);

/* POST login usuario */
/*router.post("/loginUsuario", loginControllers.validar);*/

/*GET registro usuario */
/*router.get("/newUser", loginControllers.register);*/



module.exports = router;
