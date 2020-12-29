let loginControllers = {
    login : function(req, res, next) {
      res.render('login');
    },

    /*register : function(req, res){
      res.render("register")
    }*/ /* ESTA RUTA VAMOS A TENER QUE PENSARLA. ES UN FORM GET ADENTRO DE UN FORM POST. */

    validar : function(req, res){
      
      /*let usuarioLogin = {
        email : req.body.emailLogin,
        password : req.body.passwordLogin
      };

      let usuarios = [
      {
        email : "agus@gmail.com",
        password : 1234
      },
      {
        email : "info@gmail.com",
        password : 12345
      }

      ];*/
      
      /*for(let i = 0; i < usuarios.length; i++){
        if((usuarios[i].email === usuarioLogin.email) && (usuarios[i].password === usuarioLogin.password)){
          
        }
      };*/
      /*res.redirect("bienvenido");*/
    }
}

module.exports = loginControllers;