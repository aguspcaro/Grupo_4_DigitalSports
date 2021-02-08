const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
//const usersFilePath = path.join(__dirname, '../data/users.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const { check, validationResult, body } = require('express-validator');
const { ValidatorsImpl } = require('express-validator/src/chain');
const { UnorderedCollection } = require('http-errors');
const db = require("../../database/models/index");
   


let usersControllers = { 
  // VISTA PERFIL USUARIO Y SUS ACCIONES

  root: function (req, res, next) {
  
    req.session.user;
    let userLogueado;
    
    
    
    if (req.session != undefined) {
      userLogueado = req.session.user;
      //console.log(userLogueado.id)
      return res.render('users/users', {userLogueado});
      
    }  
    else {
      userLogueado = {};
      return res.redirect("/")
    }

   
    
  
    
  },
  mostrarEdicionPerfil: function(req, res, next) {
    let userLogueado;
    
   
    
    db.Profile.findOne({where : {user_id: req.params.id}})

    .then(function(user) {
      userLogueado = user
      console.log(userLogueado)
      
      return res.render('users/perfil-modificar', { errors: errors.mapped(), userLogueado : userLogueado });
    
    
    }).catch(function(errno) {
        return res.send(errno)
    })
    
    
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
  
    }).then(function(user){ res.redirect("/users/login/perfil/" + req.params.id)}).catch(function(errno){res.send(errno)})
  },



  mostrarUsuario: function (req, res) {

    let errors = validationResult(req);
    let userLogueado;
    if (req.session != undefined) {
      

      db.User.findByPk(req.params.id)

      .then(function(user) {
        
      
        //console.log(user);
        userLogueado = user;
        
        return res.render('users/user-modificar', { errors: errors.mapped(), userLogueado });
      
      
      }).catch(function(errno) {
          return res.send(errno)
      })
    }
    else {
      userLogueado = {}
      return res.redirect("/");
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
    
    let usuario = req.params.id;
    

    const filtrar = users.filter((user) => user.id != usuario);

    let user = JSON.stringify(filtrar);
    fs.writeFileSync(usersFilePath, user);
    res.redirect('/');
    
  },

  // VISTA DEL REGISTER

  mostrarRegister: function (req, res, next) {
    let userLogueado


    if (req.session != undefined) {
     userLogueado = {
        session: req.session.user
      }
    }
    else {
      userLogueado = {}
    }
    res.render('users/register', { errors: {}, userLogueado });
  },

  createRegister: function (req, res, next) {

    db.User.create({
      email: req.body.email,
      password: req.body.password
    })

    res.redirect("/users/login")

  },

  // LOGIN

  login: function (req, res, next) { 
    
    userLogueado = req.session.user
    
    if (req.session != undefined) {
     userLogueado = {
        session: req.session.user
      }
    }
    else {
      userLogueado = {};
    }
    return res.render('users/login', { errors: {}, userLogueado});
  },

  checkLogin: function (req, res, next) {
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
        
        userLogueado = user;
        if (userLogueado == undefined) {
          userLogueado;
          return res.render('users/login', {
            errors: {
              msg: 'Los datos son incorrectos. Verificalos y volvé a intentarlo.', 
            }, userLogueado });
        } else {
          let usuario;
          userLogueado.forEach(function(user){ usuario = user.dataValues})
          
          if (req.session != undefined) {
            
            req.session.user = usuario;

          } else {
             req.session.user = {};
           }
           // console.log(req.session.user)
          //console.log(usuario)
          return res.redirect('login/perfil')
        }
  
        if (req.body.recordame != undefined) {
          res.cookie('recordame', usuario, { maxAge: 60000 });
        };
  
        

      })
       
          
      .catch(function(errno) {
        res.send(errno)
      });
      
      
    } else {
      userLogueado = {}
      return res.render('users/login', { errors: errors.mapped(), userLogueado});
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

  closed: function(req, res, next) {
    req.session.destroy()
    res.redirect('/')
  },

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
    }).then(function(user){res.redirect("/users/login/perfil")}).catch(function(errno){res.send(errno)})

    
  }
};

module.exports = usersControllers;
