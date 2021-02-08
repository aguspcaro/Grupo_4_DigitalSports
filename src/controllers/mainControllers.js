const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../../database/models/index")

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
  }
}

module.exports = mainControllers;