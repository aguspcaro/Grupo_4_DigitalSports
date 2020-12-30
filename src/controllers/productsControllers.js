const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let productsControllers = {
  root: function (req, res, next) {
    res.render('products',{products});
    
  },
  edit: function (req, res, next) {
        res.send("editaste el producto");
  },
  delete: function (req, res, next) {
    res.send("eliminaste el producto");
},
  cart: function (req, res, next) {
    res.render('cart');
  },
  detail: function (req, res, next) {
    res.render('detail');
  },
  adm: function (req, res, next) {
    res.render('admproduct');
},
  createproduct: function (req, res, next) {
  res.send('agregaste producto al json');
},
}
module.exports = productsControllers;
