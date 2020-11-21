const express = require("express");

const app = express();


app.listen(3030, function() {
    console.log("servidor funcionando")
});


app.get("/", function(req,res) {
    res.sendFile(__dirname + "/views/index.html")
});


app.get("/login", function(req,res) {
    res.sendFile(__dirname + "/views/login.html")
});

app.get("/register", function(req,res) {
    res.sendFile(__dirname + "/views/register.html")
});



app.get("/detail", function(req,res) {
    res.sendFile(__dirname + "/views/detail.html")
});


app.get("*", function(req,res) {
    res.sendFile(__dirname  + "/../public/" + req.url)
});
