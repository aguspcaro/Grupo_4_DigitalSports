const fs = require('fs');
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const db = require("../database/models/index")

let productsControllers = {

  root: function (req, res, next) {    
  
  db.Products.findAll()

  .then(function(products){

    return res.render('products/products', { products:products, userLogueado });
  
  })
    
},
 
  cart: function (req, res, next) {

    let userLogueado;

    if (req.session != undefined) {

      userLogueado = req.session.user;

      res.render('products/cart', {userLogueado});

    }
    else {

      userLogueado = {}
    }
  },
  detail: function (req, res, next) { 
       
    let userLogueado;

    if (req.session != undefined) {

      userLogueado = req.session.user;

      db.Products.findByPk(req.params.id, {

        include : ['sizes', 'brands', 'sports']

      })

      .then(function(product){
       
        return res.render('products/detail', { product:product, userLogueado });
  
      })

    } else {

      userLogueado = {}

      db.Products.findByPk(req.params.id, {

        include : ['sizes', 'brands', 'sports']

      })

      .then(function(product){
       
        return res.render('products/detail', { product:product, userLogueado });
  
      })

    }    
    
  },

  adm: function (req, res, next) {

    let userLogueado;

    if (req.session != undefined) {

      userLogueado = req.session.user;

      res.render('products/admproduct', {userLogueado});

    } else {

      userLogueado = {}

      res.redirect("/")

    }

  },

  createproduct: function (req, res, next) {  

    db.Products.create({
      name: req.body.name,
      description: req.body.coments,
      image: req.files[0].filename,
      stock: req.body.stock,
      category: req.body.categoria,
      price: req.body.precio,
      promPrice: req.body.promocional,
      size_id: req.body.talle,
      brand_id: req.body.marca,   
      sport_id: req.body.deporte, 
      public: req.body.publico,
      shipping: req.body.envio,
      
    }).then(data=> {

      res.redirect("/")

    }).catch(error=>console.log(error));
      

  },
   
  modificar: function (req, res, next) {   

    let userLogueado;

    if (req.session != undefined) {

      userLogueado = req.session.user;

      db.Products.findByPk(req.params.id)

      .then(function(product){
  
        return res.render('products/producto-modificar', { product:product, userLogueado });
  
      }).catch(function(errno){console.log(errno)})

    } else {

      userLogueado = {}

      res.redirect("/")

    }
   
  },

  edit: function (req, res) {

    db.Products.update({
      name: req.body.name,
      description: req.body.coments,
      image: req.files[0].filename,
      stock: req.body.stock,
      category: req.body.categoria,
      price: req.body.precio,
      promPrice: req.body.promocional,
      size_id: req.body.talle,
      brand_id: req.body.marca,   
      sport_id: req.body.deporte, 
      public: req.body.publico,
      shipping: req.body.envio,

  },{
      where : {

        id : req.params.id 

      }
    })
    
    .then(data=>res.redirect("/"))

    .catch(error=>console.log(error))

  },

  delete: function (req, res, next) {
   
    db.Products.destroy({

      where: {

        id: req.params.id

      }
      
    })
    .then(data=>res.redirect("/"))

    .catch(error=>console.log(error))

  }    
  
};

module.exports = productsControllers;