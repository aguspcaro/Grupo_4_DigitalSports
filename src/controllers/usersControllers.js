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

// MUESTRA LA VISTA PARA EDITAR EL USUARIO

  mostrarUsuario: function (req, res) { 

    let errors = validationResult(req);

    let userLogueado;

    db.User.findByPk(req.params.id)

    .then(function(user) {

      users = {
        email: req.body.email,
        password: req.body.password
      }
    
      userLogueado = user;
      
      return res.render('users/user-modificar', { errors , userLogueado, users });      
    
    }).catch(function(errno) {

        return res.send(errno)
    })

  },

  editUsuario: function (req, res, next) {
    
    let errors = validationResult(req)

    if( errors.isEmpty() ) { 

      db.User.update({

        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 12)

      }, {

        where:{

          id: req.params.id

        }
    
      }).then(function(user){ res.redirect("/users/login/perfil")}).catch(function(errno){res.send(errno)})

    } else {

      db.User.findByPk(req.params.id)

        .then(function(user) {

          users = {
            email: req.body.email,
            password: req.body.password

          }
        
          userLogueado = user;
          
          return res.render('users/user-modificar', { errors: errors.mapped() , userLogueado, users });      
        
        }).catch(function(errno) {

            return console.log(errno)
        })



    }
  },

  delete: function (req, res) {

    db.User.destroy ({

      where: {

        id: req.params.id

      }

    })

   

    .then(function(data) {
       
    req.session.destroy();

    res.clearCookie("recordame")
    
    res.redirect("/")
    })


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
        password: bcrypt.hashSync(req.body.password, 12)

      }).then(function(user){

        req.session.user = user;

        userLogueado = req.session.user
        
        res.redirect("/")

      }).catch(function(errno) { res.send(errno)});

    } else {

      usuario = { // esto sirve para devolver al usuario lo que habia escrito mal en el input

        email : req.body.email,
        password: req.body.password

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

          email: req.body.emailLogin

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

        let checkPassword;

        if(usuario != undefined){

          checkPassword = bcrypt.compareSync(req.body.passwordLogin, usuario.password)

        }

        if (usuario == undefined || checkPassword == false ) { //si puso mal el mail o mal la contraseña. esto va a ser undefined, por ende salta el error.

          return res.render('users/login', { users ,errors: { msg: 'Los datos son incorrectos. Verificalos y volvé a intentarlo.' }, userLogueado });


        } else { // si existe guardamelo en usuario. 
         
          
          req.session.user = usuario;


          if (req.body.recordame != undefined) {

            res.cookie('recordame', usuario, { maxAge: 60000 });

          };          

          return res.redirect('login/perfil')
        }

      })
       
      .catch(function(error) {

        console.log(error)

      });
      
    } else { // si existen errores 

      userLogueado = {}

      users = {
        email: req.body.emailLogin,
        password: req.body.passwordLogin
      }

      return res.render('users/login', { errors: errors.mapped(), userLogueado, users});

    }

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

    let errors = validationResult(req);

    let userLogueado = req.session.user;
    console.log(userLogueado);

    db.Profile.findOne({where: {user_id: req.params.id}})

    .then(function(usuario){

      if(usuario){

        return res.render('users/crearPerfil', {errors: {}, userLogueado, usuario});

      } else {

        return res.render('users/crearPerfil', {errors: {}, userLogueado, usuario: {}});

      }


    })
  },
  
  createPerfil : function(req, res, next) {

    let usuario;

    let userLogueado = req.session.user;

    let errors = validationResult(req);

    if(errors.isEmpty()){ 
      console.log("estoy en if no errores");


      db.Profile.findOne({where: {user_id: req.params.id}}).then(function(perfil){

        userLogueado;

        if(perfil == undefined) { 

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

            res.redirect("/users/login/perfil")}).catch(function(errno){console.log();(errno)})

        } else {

          db.Profile.update({

            image: req.files[0].filename,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.edad,
            birthday: req.body.birthday,
            
      
          }, {
      
            where:{
      
              user_id: req.params.id
      
            }
        
          }).then(function(user){ res.redirect("/users/login/perfil")}).catch(function(errno){console.log(errno)})
        }

      }).catch(function(errno){console.log(errno)})

    } else {
      console.log("estoy en errores");

      
      usuario = { // esto sirve para devolver al usuario lo que habia escrito mal en el input

        first_name : req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        birthday: req.body.birthday,

      }

      return res.render('users/crearPerfil', { errors: errors.mapped(), userLogueado, usuario})

    }
  },
};

module.exports = usersControllers;