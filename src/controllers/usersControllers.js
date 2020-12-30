let usersControllers = {
  register: function (req, res, next) {
    res.render('register');
  },
  registration: function (req, res, next) {
    res.send('felicitaciones te has registrado');
  },
  login: function (req, res, next) {
    res.render('login');
  },
  suscribre: function (req, res, next) {
    res.send('Te suscribiste');

    //     /*res.redirect("bienvenido");*/
  },
};

module.exports = usersControllers;
