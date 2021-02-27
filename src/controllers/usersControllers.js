const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models/index");


let usersControllers = { 

  // MUESTRA LA VISTA PARA EL ACCIONAR DEL USUARIO : CREAR PERFIL, CERRAR SESION..

  root: function (req, res, next) {
  
    let userLogueado;

    let perfilLogueado = req.session.perfil;
    
    if (req.session != undefined) {

      userLogueado = req.session.user;

      return res.render('users/users', {userLogueado, perfilLogueado});  
      
    } else {

      userLogueado = {};

      res.redirect("/")

    }   
    
  },

  // MUESTRA LA VISTA PARA EDITAR EL PERFIL

  mostrarEdicionPerfil: function(req, res, next) {

    let userLogueado;

    let errors = validationResult(req);

    if (req.session != undefined) {

      db.Profile.findOne({where : {user_id: req.params.id}})

      .then(function(user) {

        userLogueado = user;
        
        return res.render('users/perfil-modificar', { errors: errors.mapped(), userLogueado})      
      
      }).catch(function(errno){console.log(errno)})


    } else {

      userLogueado = {}

      return res.redirect("/");

    }      
    
  },  

  editPerfil: function(req, res, next) {
    
    db.Profile.update({

      image: req.files[0].filename,
      fisrt_name: req.body.name,
      last_name: req.body.lastName,
      age: req.body.edad,
      birthday: req.body.birthday

    }, {

      where:{

        user_id: req.params.id

      }
  
    }).then(function(user){ res.redirect("/users/login/perfil")}).catch(function(errno){res.send(errno)})

  },

// MUESTRA LA VISTA PARA EDITAR EL USUARIO

  mostrarUsuario: function (req, res) {

    let errors = validationResult(req);

    let userLogueado;

    if(errors.isEmpty()) { 

      if (req.session != undefined) {      

        db.User.findByPk(req.params.id)

        .then(function(user) {

          users = {
            email: req.body.email,
            password: req.body.password
          }
        
          userLogueado = user;
          
          return res.render('users/user-modificar', { errors , userLogueado });      
        
        }).catch(function(errno) {

            return res.send(errno)
        })

      } else {

        userLogueado = {}

        return res.redirect("/");
        
      }
    } else {

      users = {
        email: req.body.email,
        password: req.body.password
      }

      return res.render("users/user_modificar", {errors: errors.mapped(), users})
    }
    
  },

  editUsuario: function (req, res, next) {

    db.User.update({

      email: req.body.email,
      password: req.body.password

    }, {

      where:{

        id: req.params.id

      }
  
    }).then(function(user){ res.redirect("/users/login/perfil/editar/" + req.params.id)}).catch(function(errno){res.send(errno)})

  },

  delete: function (req, res) {

    db.User.destroy ({

      where: {

        id: req.params.id

      }

    })

    .then(data=>res.redirect("/users/login"))

    .catch(error=>console.log(error))

  },

 // MUESTRA LA VISTA PARA REGISTRARSE

  mostrarRegister: function (req, res, next) {

    let usuario = {}

    let userLogueado;

    if (req.session != undefined) {

     userLogueado = req.session.user

    } else {

      userLogueado = {}

    }

    res.render('users/register', { errors: {}, userLogueado, usuario });

  },

  createRegister: function (req, res, next) {

    let usuario;

    let userLogueado;

    let errors = validationResult(req);

    if(errors.isEmpty()){ 

      db.User.create({

        email: req.body.email,
        password: req.body.password

      }).then(function(user){

        req.session.user = user;

        userLogueado = req.session.user
        
        res.redirect("/")

      }).catch(function(errno) { res.send(errno)});

    } else {

      usuario = { // esto sirve para devolver al usuario lo que habia escrito mal en el input

        email : req.body.email

      }

      res.render('users/register', { errors: errors.mapped(), userLogueado, usuario });

    }


  },

// MUESTRA LA VISTA PARA LOGUEARSE

  login: function (req, res, next) { 
    
    let users ={}
    
    if (req.session != undefined) {

      userLogueado = req.session.user;

    } else {

      userLogueado = {};
      
    }
    
    return res.render('users/login', { errors: {}, userLogueado, users});

  },

  checkLogin: function (req, res, next) {

    let users ={}

    let errors = validationResult(req);

    let userLogueado;
    
    if (errors.isEmpty()) {

      db.User.findAll({ // "User" es el alias que asigne en el modelo

        where: {

          email: req.body.emailLogin,

          password: req.body.passwordLogin

        }

      }) 
        
      .then(function(user) {

        users = { // esto nos sirve para devolverle a la vista el mail erroneo que ingreso
          email: req.body.emailLogin,
          password: req.body.passwordLogin
        }

        let usuario;

        userLogueado = user;

        userLogueado.forEach(function(user){ usuario = user.dataValues}) // esto sirve para recorrer al usuario. Desde la bd viene adentro de muchos objetos. Hay un solo usuario, no muchos. 

        if (usuario == undefined) { //si puso mal el mail o mal la contraseña. esto va a ser undefined, por ende salta el error.

          return res.render('users/login', { users ,errors: { msg: 'Los datos son incorrectos. Verificalos y volvé a intentarlo.' }, userLogueado });

        } else { // si existe guardamelo en usuario. 
         
          if (req.session != undefined) { 
            
            req.session.user = usuario;

          } else {

            req.session.user = {};

          }

          if (req.body.recordame != undefined) {

            res.cookie('recordame', usuario, { maxAge: 60000 });

          };          

          return res.redirect('login/perfil')
        }

      })
       
      .catch(function(errno) {

        res.send(errno)

      });
      
    } else { // si existen errores en el middleware de la ruta, van a saltar estos errores.

      userLogueado = {}

      users = {
        email: req.body.emailLogin,
        password: req.body.passwordLogin
      }

      return res.render('users/login', { errors: errors.mapped(), userLogueado, users});

    }

  },

  check: function (req, res, next) {
    
    if (req.session.user == undefined) {

      return res.send('no hay ningun usuario logueado');

    } else {

      return res.redirect('/');

    }

  },

  // FORMULARIO DE SUSCRIPCION

  suscribe: function (req, res, next) {

    res.render('thankYou');

  },

  // CERRAR SESION

  closed: function(req, res, next) {


    req.session.destroy();

    if(req.session == undefined){

      res.clearCookie("recordame")

    }


    res.redirect('/')

  },

  // MUESTRA LA VISTA PARA CREAR PERFIL

  mostrarPerfil: function(req, res, next) {

    let userLogueado;

    if (req.session.user == undefined) {
      
      return res.redirect("/");

    } else {

      userLogueado = req.session.user;

      return res.render('users/crearPerfil', {errors: {}, userLogueado});

    }
    
  },
  
  createPerfil : function(req, res, next) {

    let userLogueado = req.session.user;

    db.Profile.create({

      image: req.files[0].filename,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      birthday: req.body.birthday,
      user_id: userLogueado.id

    },{

      association: "user"

    }).then(function(user){

      req.session.perfil = user;

      res.redirect("/users/login/perfil")}).catch(function(errno){res.send(errno)})

  }

};

module.exports = usersControllers;