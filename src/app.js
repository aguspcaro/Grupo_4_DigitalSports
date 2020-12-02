const express = require("express");

const app = express();


app.listen(3030, function() {
    console.log("servidor funcionando")
});

app.get ("/", function (req,res){
    res.sendFile(__dirname + "/views/products/index.html")
    })
app.get ("/carrito", function (req,res){
    res.sendFile(__dirname + "/views/products/carrito.html")
    })    
app.get ("/detail", function (req,res){
    res.sendFile(__dirname + "/views/products/detail.html")
    })    
app.get ("/login", function (req,res){
    res.sendFile(__dirname + "/views/users/login.html")
    })
app.get ("/register", function (req,res){
    res.sendFile(__dirname + "/views/users/register.html")
    })

app.get ("/adm-producto", function (req,res){
    res.sendFile(__dirname + "/views/products/adm-producto.html")
    })


app.get('*', (req, res) => {
    res.sendFile(__dirname.replace("\src", "") + '/public/' + req.url);
});