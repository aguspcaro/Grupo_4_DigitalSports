let mainControllers = {
  index: function (req, res, next) {
    res.render('index');
  },
  search: function (req, res) {
     let palabraBuscada = req.query.homeSearch;

    res.send(palabraBuscada);
  }
}


module.exports = mainControllers;
