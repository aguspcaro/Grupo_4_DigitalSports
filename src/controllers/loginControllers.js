let loginControllers = {
    login : function(req, res, next) {
      res.render('login');
    },

    /*register : function(req, res){
      res.render("register")
    }*/ /* ESTA RUTA VAMOS A TENER QUE PENSARLA. ES UN FORM GET ADENTRO DE UN FORM POST. */

    /*validar : function(req, res){

      let usuarioLogin = {
        email : req.query.emailLogin,
        password : req.query.passwordLogin
      };
      let usuarios = {
        email : "agus@gmail.com",
        password : 1234
      };
      
      for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i] === usuarioLogin){
          res.send("bienvenido");
        } else {
          res.render("register")
        };
      };
    }*/
}

module.exports = loginControllers;