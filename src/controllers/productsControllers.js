let productsControllers = {
  root: function (req, res, next) {
    res.render('products');
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
};

module.exports = productsControllers;
