const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const db = require("../../database/models/index")

let productsControllers = {

  root: function (req, res, next) {
  res.render('products/products', { products });
  
},
  prueba: function (req,res, next) {
    console.log(db.models)
    db.Products.findByPk(1).then(product=> {
    
      res.render("products/prueba",{product:product});
     })
    
    
},

  cart: function (req, res, next) {
    res.render('products/cart');
  },
  detail: function (req, res, next) {
    let detalleProducto = req.params.id;
    let product = products.find(function (buscar) {
      return buscar.id == detalleProducto;
    });

    res.render('products/detail', { product });
  },
  adm: function (req, res, next) {
    res.render('products/admproduct');
  },
  createproduct: function (req, res, next) {
/*     products.push({
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
    fs.writeFileSync(productsFilePath, producto); */

    db.Sizes.create({
    
    name: req.body.talle,

    /* description: req.body.coments,

    image: req.files[0].filename,

    stock: req.body.stock,

    category: req.body.categoria,

    price: req.body.precio,
    
    promPrice: req.body.promocional,

    size_id: req.body.talle,
    
    brand_id: req.body.marca,
    
    sport_id: req.body.deporte, */
    
    })
    .then(function(resultado) {
        res.send(resultado)
    })
    .catch(function(err) {
      console.log(err)
    })
  },

  modificar: function (req, res, next) {
    let codigo = req.params.id;
    let product = products.find(function (busca) {
      return busca.id == codigo;
    });

    res.render('products/producto-modificar', { product });
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
