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
  let product=products.find(busca=>busca.id==codigo);

  res.render("producto-modificar",{product});

}
}
module.exports = productsControllers;
