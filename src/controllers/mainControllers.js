const fs = require('fs');
const path = require('path');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models/index")

let mainControllers = {
  index: function (req, res, next) {

    let userLogueado;

    if (req.session != undefined) {
     userLogueado = req.session.user;
    }
    else {
      userLogueado = {}
    }
    
    let promesaLanzamientos = db.Products.findAll(
      {
        where: {
          category: "Lanzamientos"
      }
    }
    )

    let promesaOfertas = db.Products.findAll(
      {
        where: {
          category: "Ofertas"
      }
    }
    )

    let promesaDestacados = db.Products.findAll(
      {
        where: {
          category: "Destacados"
      }
    }
    )

    let promesaRecomendados= db.Products.findAll(
      {
        where: {
          category: "Recomendados"
      }
    }
    )


  Promise.all([promesaDestacados, promesaOfertas, promesaLanzamientos, promesaRecomendados, ])
    .then(function(resultado) {
      res.render('index', {resultado,userLogueado})
    })
    .catch(function(err) {
      console.log(err)
    })  
},

  search: function (req, res) {
    let palabraBuscada = req.query.homeSearch;

    res.send(palabraBuscada);
  },

  mujer: function (req, res) {
    db.Products.findAll(
      {
        where: {
          public: "mujeres"
        }
      }
    )
    .then(function(resultadoBusqueda) {
      res.render('products/mujer', {userLogueado: {}, resultadoBusqueda})
    })
    .catch(function(err) {
      console.log(err)
    })
  },
  hombre: function (req, res) {
    db.Products.findAll(
      {
        where: {
          public: "hombres"
        }
      }
    )
    .then(function(resultadoBusqueda) {
      res.render('products/hombre', {userLogueado: {}, resultadoBusqueda})
    })
    .catch(function(err) {
      console.log(err)
    })
  },
  chicos:  function (req, res) {
    db.Products.findAll(
      {
        where: {
          public: "niños"
        }
      }
    )
    .then(function(resultadoBusqueda) {
      res.render('products/chicos', {userLogueado: {}, resultadoBusqueda})
    })
    .catch(function(err) {
      console.log(err)
    })
  }
}

module.exports = mainControllers;