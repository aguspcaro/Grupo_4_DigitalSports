let productsControllers = {
  root: function (req, res, next) {
    res.render('index');
  },
};

module.exports = productsControllers;

// cart : function(req, res, next) {
//   res.render('cart');
// }

// detail : function(req, res, next) {
//   res.render('detail');
// },

// router.get('/', cartControllers.cart);
