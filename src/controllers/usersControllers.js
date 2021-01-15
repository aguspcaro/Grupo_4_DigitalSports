const fs = require('fs');
const path = require('path');
var bcrypt = require("bcryptjs");
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
let { check, validationResult, body} = require("express-validator");
const { ValidatorsImpl } = require('express-validator/src/chain');
const { UnorderedCollection } = require('http-errors');


let usersControllers = {

  root : function(req, res, next) {
    res.render("users/users", { users } );
  },

  register: function (req, res, next) {
    
    res.render("users/register");
  },

  registration: function (req, res, next) {
    let errors = validationResult(req);
    console.log(errors)
    if( errors.isEmpty() ) {
      users.push({
        id: Date.now(),
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
      });
      
      let usuario = JSON.stringify(users);
      fs.writeFileSync(usersFilePath, usuario);
  
      return res.redirect('login');
    } else {
      return res.render("users/register", {errors : errors.mapped()})
    }
    
  },

  edit : function(req, res) {
    users.forEach(function(user) {
      if (user.id == req.params.id) {
        user.name = req.body.name;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;
        user.confirmPassword = req.body.confirmPassword;
      }
    })
    let usuario = JSON.stringify(users);
    fs.writeFileSync(usersFilePath, usuario);

    res.redirect("users/users")
  },

  delete : function(req, res) {
    const filtrar = users.filter((user) => user.id != req.params.id);
    let user = JSON.stringify(filtrar);
    fs.writeFileSync(usersFilePath, user);
    res.redirect("users/users");
  },

  modificar : function(req, res) {
    let codigo = req.params.id;
    let user = users.find(function (busca) {
      return busca.id == codigo;
    });

    res.render('users/users', { user });
  },

  login: function (req, res, next) {
    res.render("users/login", {errors: {}});
},


  checkLogin: function (req, res, next) {

    

      let errors = validationResult(req);

      if (errors.isEmpty()) {
      
       let usuarioLogueado = users.find(function(user){
        req.body.emailUser==user.email ;
      })
      
        if (usuarioLogueado!= undefined){
          res.send("logueado");

        }else{

          res.render("/user/login");
        }

      
          

      }

        
      else {
        console.log(errors.mapped())
        res.render("users/login", {errors: errors.mapped()})
      }

  },

  suscribe: function (req, res, next) {
    res.render("thankYou");
  }
  
  
};

module.exports = usersControllers;
