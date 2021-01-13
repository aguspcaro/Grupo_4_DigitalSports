const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
let { check, validationResult, body} = require("express-validator");


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
  
      return res.redirect('/');
    } else {
      return res.render("users/register", {errors : errors.errors})
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
    res.render("users/login");
  },


  checkLogin: function (req, res, next) {
    res.send("Has ingresado correctamente");
  },

  suscribe: function (req, res, next) {
    res.render("thankYou");
  }
  
  
};

module.exports = usersControllers;
