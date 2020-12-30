var express = require('express');
var router = express.Router();
let productsControllers = require('../controllers/productsControllers');
const multer = require("multer");
const path = require('path');

let storage = multer.diskStorage({
    destination: function(req,file,cb){
        return cb(null, path.join(".","public","images","products"))
    } ,
    
    filename: function(req,file,cb){
        return cb(null, Date.now() + path.extname(file.originalname))
    }
    
    })
    let uploads =multer({storage: storage});

router.get('/', productsControllers.root);
router.put('/:id', productsControllers.edit);
router.delete('/:id', productsControllers.delete);
router.get('/cart', productsControllers.cart);
router.get('/detail/:id', productsControllers.detail);
router.get('/create', productsControllers.adm);
router.post('/create', uploads.any(),productsControllers.createproduct);
router.get("/vista/:id", productsControllers.modificar);

module.exports = router;
