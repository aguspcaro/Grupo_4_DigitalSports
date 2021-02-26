const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const db = require("../../database/models/index")

let productsControllers = {

  root: function (req, res, next) {
    let userLogueado


    if (req.session != undefined) {
     userLogueado = {
        session: req.session.user
      }
    }
    else {
      userLogueado = {}
    }
  res.render('products/products', { products, userLogueado });
  
},
  prueba: function (req,res, next) {
    console.log(db.models)
    let userLogueado


    if (req.session != undefined) {
     userLogueado = {
        session: req.session.user
      }
    }
    else {
      userLogueado = {}
    }
    db.Products.findByPk(1).then(product=> {
    
      res.render("products/prueba",{product:product, userLogueado});
     })
    
    
},

  cart: function (req, res, next) {
    let userLogueado


    if (req.session != undefined) {
     userLogueado = {
        session: req.session.user
      }
    }
    else {
      userLogueado = {}
    }
    res.render('products/cart', {userLogueado});
  },
  detail: function (req, res, next) {
    let detalleProducto = req.params.id;
    let product = products.find(function (buscar) {
      return buscar.id == detalleProducto;
    });

    let userLogueado


    if (req.session != undefined) {
     userLogueado = {
        session: req.session.user
      }
    }
    else {
      userLogueado = {}
    }

    res.render('products/detail', { product, userLogueado });
  },
  adm: function (req, res, next) {
    let userLogueado


    if (req.session != undefined) {
     userLogueado = {
        session: req.session.user
      }
    }
    else {
      userLogueado = {}
    }
    res.render('products/admproduct', {userLogueado});
  },
  createproduct: function (req, res, next) {
    /* products.push({
      id: Date.now(),
      name: req.body.name,
      description: req.body.coments,
      image: req.files[0].filename,
      deporte: req.body.deporte,
      talle: req.body.talle,
      marca: req.body.marca,
      publico: req.body.publico,
      envio: req.body.envio,
      precio: req.body.precio,
      promocional: req.body.promocional,
      stock: req.body.stock,
      categoria: req.body.categoria,
    });
    let producto = JSON.stringify(products);
    fs.writeFileSync(productsFilePath, producto);
 */
 

 db.Products.create( {
   name: "Zapatillas",
   description: "Las mejores",
   image: "sportday.jpg",
   stock: 2,
   public: "Hombre",
   shipping: "Si",
   price: 10000,
   promPrice: 8000,
   category: 2,
   size_id: 2,
   brand_id:2,
   sport_id:2
 } )
 .then(function(resultado) {
   console.log(resultado)
 })
.catch(function(err) {
   console.log(err)
})


    res.redirect('/');
  },

  modificar: function (req, res, next) {
    let codigo = req.params.id;
    let product = products.find(function (busca) {
      return busca.id == codigo;
    });

    let userLogueado


    if (req.session != undefined) {
     userLogueado = {
        session: req.session.user
      }
    }
    else {
      userLogueado = {}
    }

    res.render('products/producto-modificar', { product, userLogueado });
  },

  edit: function (req, res) {
    products.forEach(function (product) {
      if (product.id == req.params.id) {
        product.name = req.body.name;
        product.description = req.body.coments;
        product.image = req.files[0].filename;
        product.deporte = req.body.deporte;
        product.talle = req.body.talle;
        product.marca = req.body.marca;
        product.publico = req.body.publico;
        product.envio = req.body.envio;
        product.precio = req.body.precio;
        product.promocional = req.body.promocional;
        product.stock = req.body.stock;
        product.categoria = req.body.categoria;
      }
    });

    let productos = JSON.stringify(products);

    fs.writeFileSync(productsFilePath, productos);

    res.redirect('/');
  },

  delete: function (req, res, next) {
    const filtrado = products.filter(
      (producto) => producto.id != req.params.id
    );

    let producto = JSON.stringify(filtrado);
    fs.writeFileSync(productsFilePath, producto);
    res.redirect('/');
  },
};

module.exports = productsControllers;
