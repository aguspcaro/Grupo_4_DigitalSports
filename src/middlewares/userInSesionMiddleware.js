function userInSesionMiddleware(req, res, next) {
  if (req.session.user != undefined) {
    let userLogueado = req.session.user;
    let perfilLogueado = req.session.perfil;

    

    return res.render('users/users', { userLogueado, perfilLogueado});
  }

  next();
}

module.exports = userInSesionMiddleware;
