
function userLogueadoMiddleware(req, res, next){

  if (req.session.user != undefined ) {
    let usuarioLogueado =  req.session.user

    return res.render('users/users', {user:usuarioLogueado})
  }
            
    next()
}

    module.exports = userLogueadoMiddleware;