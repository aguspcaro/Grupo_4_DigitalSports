const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let mainControllers = {
  index: function (req, res, next) {
    
let destacado = products.filter (function (product) {
  return product.categoria == 'destacados'
 } );
 
 let oferta = products.filter (function (product) {
  return product.categoria == 'ofertas'
 } );

 let lanzamiento = products.filter (function (product) {
  return product.categoria == 'lanzamientos'
 } );
 
 let recomendado = products.filter (function (product) {
  return product.categoria == 'recomendados'
 } );
 res.render ('index', {destacado, oferta, lanzamiento, recomendado})
 
       
  },


  search: function (req, res) {
     let palabraBuscada = req.query.homeSearch;

    res.send(palabraBuscada);
  }
}


module.exports = mainControllers;
