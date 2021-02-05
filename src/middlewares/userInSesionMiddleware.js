function userInSesionMiddleware(req, res, next) {
  if (req.session.user != undefined) {
    let userLogueado = {
      session: req.session.user
    }

    return res.render('users/users', { userLogueado});
  }

  next();
}

module.exports = userInSesionMiddleware;
