let usersControllers = {
  register: function (req, res, next) {
    res.render("register");
  },
  registration: function (req, res, next) {
    res.send("felicitaciones te has registrado");
  },
  login: function (req, res, next) {
    res.render("login");
  },
  checkLogin: function (req, res, next) {
    res.send("Has ingresado correctamente");
  },
  suscribe: function (req, res, next) {
    res.render("thankYou");

    //     /*res.redirect("bienvenido");*/
  },
};

module.exports = usersControllers;
