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
    const  filtrado= products.filter((producto)=>
    producto.id != req.params.id)

  let producto=JSON.stringify(filtrado);
  fs.writeFileSync(productsFilePath, producto);
  res.redirect('/')


},
  cart: function (req, res, next) {
    res.render('cart');
  },
  detail: function (req, res, next) {
    
    let detalleProducto=req.params.id;
    let product=products.find(function(buscar){
      return buscar.id==detalleProducto
    });

    res.render('detail', {product});
  },
  adm: function (req, res, next) {
    res.render('admproduct');
},
  createproduct: function (req, res, next) {
  
        products.push({
          id: Date.now (),
          name:req.body.name,
          description:req.body.coments,
          image: req.files[0].filename,
          category:req.body.Categoria,
          talle:req.body.talle,
          color:req.body.color,
          secundario:req.body.secundario,
          envio:req.body.envio,
          precio:req.body.precio,
          promocional:req.body.promocional,
          stock:req.body.stock,
          sku:req.body.sku,

        })
        let producto=JSON.stringify(products);
          fs.writeFileSync(productsFilePath, producto);
      
      res.redirect('/products')
},



modificar: function (req, res, next) {

  let codigo=req.params.id;
  let product=products.find(function(busca){
    return busca.id==codigo
  });

  res.render("producto-modificar",{product});

  console.log(product)
}
}
module.exports = productsControllers;
