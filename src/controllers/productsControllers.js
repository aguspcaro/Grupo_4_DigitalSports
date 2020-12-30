const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let productsControllers = {
  root: function (req, res, next) {

console.log(products);
    res.render('products',{products});
    
  },

  cart: function (req, res, next) {
    res.render('cart');
  },
  detail: function (req, res, next) {
    res.render('detail');
  },
  adm: function (req, res, next) {
    res.render('admproduct');
}
}
module.exports = productsControllers;

// cart : function(req, res, next) {
//   res.render('cart');
// }

// detail : function(req, res, next) {
//   res.render('detail');
// },

// router.get('/', cartControllers.cart);
