//Si el usuario existe continua al controlador sino te redirige.


function userOfMiddleware(req, res, next) {
  if (req.session.user == undefined) {
    return res.redirect('/users/login');
  }

  next();
}

module.exports = userOfMiddleware;
