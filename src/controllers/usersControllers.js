const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const { check, validationResult, body } = require('express-validator');
const { ValidatorsImpl } = require('express-validator/src/chain');
const { UnorderedCollection } = require('http-errors');
const db = require("../../database/models/index")

let usersControllers = {
  // VISTA PERFIL USUARIO Y SUS ACCIONES

  root: function (req, res, next) {
    errors = {};
    let userLogueado


    if (req.session != undefined) {
     userLogueado = {
        session: req.session.user
      }
    }
    else {
      userLogueado = {}
    }
    if (req.session.user == undefined) {
      res.send('no hay ningun usuario logueado');
    } else {
      return res.render('users/users', { userLogueado });
    }
  },

  modificar: function (req, res) {
    let errors = validationResult(req);
    let userLogueado


    if (req.session != undefined) {
     userLogueado = {
        session: req.session.user
      }
    }
    else {
      userLogueado = {}
    }

    return res.render('users/user-modificar', {
      errors: errors.mapped(), userLogueado
    });
  },

  edit: function (req, res, next) {
    let user = req.session.user;
    let errors = validationResult(req);

    let cliente = req.params.id;
    
      users.forEach(function (user) {
        if (user.id == cliente) {
          user.name = req.body.name;
          user.lastName = req.body.lastName;
          user.email = req.body.email;
          user.password = bcrypt.hashSync(req.body.password, 10);
          edad = req.body.edad,
          pais = req.body.pais;
        }
      });

      let usuario = JSON.stringify(users);
      fs.writeFileSync(usersFilePath, usuario);

      res.redirect('/');
    
  },

  delete: function (req, res) {
    let usuario = req.params.id;

    const filtrar = users.filter((user) => user.id != usuario);

    let user = JSON.stringify(filtrar);
    fs.writeFileSync(usersFilePath, user);
    res.redirect('/');
  },

  // VISTA DEL REGISTER

  register: function (req, res, next) {
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

  registration: function (req, res, next) {

    db.User.findAll()
      .then(function(user) {
        return res.render("users/ejemplo", { user:user})
      }).catch(function(errn){
        res.send(errn)
      })

/*    let errors = validationResult(req);

    if (errors.isEmpty()) {
      users.push({
        id: Date.now(),
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        edad: req.body.edad,
        pais: req.body.pais,
      });

      let usuario = JSON.stringify(users);
      fs.writeFileSync(usersFilePath, usuario);

      return res.redirect('login');
    } else {
      return res.render('users/register', { errors: errors.mapped() });
    } */
  },

  // LOGIN

  login: function (req, res, next) {

    let userLogueado


    if (req.session != undefined) {
     userLogueado = {
        session: req.session.user
      }
    }
    else {
      userLogueado = {}
    }
   
    res.render('users/login', { errors: {}, userLogueado});
  },

  checkLogin: function (req, res, next) {

    let errors = validationResult(req);

    //si no hay errores
    if (errors.isEmpty()) {
      let usuarioLogueado = users.find(function (user) {
        return (
          user.email == req.body.emailLogin &&
          bcrypt.compareSync(req.body.passwordLogin, user.password)
        );
      });

      req.session.user = usuarioLogueado;
      
      console.log(req.session.user)
  

      if (usuarioLogueado == undefined) {
        let userLogueado = {}
        return res.render('users/login', {
          errors: {
            msg: 'Los datos son incorrectos. Verificalos y volvé a intentarlo.', 
          }, userLogueado
        });
      }

      if (req.body.recordame != undefined) {
        res.cookie('recordame', usuarioLogueado, { maxAge: 60000 });
      }

      res.redirect('/');
    } 
    
    //si hay errores
    else {
      let userLogueado = {}
      res.render('users/login', { errors: errors.mapped(), userLogueado});
    }
  },

  check: function (req, res, next) {
    
    if (req.session.user == undefined) {
      res.send('no hay ningun usuario logueado');
    } else {
      res.redirect('/');
    }
  },

  // FORMULARIO DE SUSCRIPCION

  suscribe: function (req, res, next) {
    res.render('thankYou');
  },
};

module.exports = usersControllers;
