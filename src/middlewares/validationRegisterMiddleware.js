let { check, validationResult, body} = require("express-validator");
let validationRegisterMiddleware = 
    [

    check("name").isLength({min: 2}).withMessage("* Debes completar este campo"),

    check("lastName").isLength({min: 3}).withMessage("* Debes completar este campo"),

    check("email").isEmail().withMessage("* Debes completar este campo"),

    check("password").isLength({min: 8}).withMessage("* Debes completar este campo"),

    check("edad").isLength({min: 8}).withMessage("* Debes completar este campo"),

    check("edad").isDate().isLength({min: 6}).withMessage("* Debes completar este campo"),

    // CHEQUEAR QUE EL EMAIL NO EXISTA EN NUESTRO JSON

    body("email").custom(function (value) {
      let usersFilePath = path.join(__dirname, '../data/users.json')
      let usersJson = JSON.parse(fs.readFileSync(usersFilePath, {encoding: "utf-8"}));
      let users;
      
      if(usersJson == ""){
        users = [];
      } else {
        users = usersJson;
      }
      for(let i = 0; i < users.length; i++){
        
        if(users[i].email == value){
          return false;
        }
        return true;
      }
    }).withMessage("* Email ya existente") 
]




module.exports = validationRegisterMiddleware;