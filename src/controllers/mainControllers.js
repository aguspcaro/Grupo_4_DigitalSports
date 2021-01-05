const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let mainControllers = {
  index: function (req, res, next) {
    
    
    res.render('index',{products});
    
  },


  search: function (req, res) {
     let palabraBuscada = req.query.homeSearch;

    res.send(palabraBuscada);
  }
}


module.exports = mainControllers;
