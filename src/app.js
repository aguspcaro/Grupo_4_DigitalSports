const express = require("express");

const app = express();


app.listen(3030, function() {
    console.log("servidor funcionando")
});

<<<<<<< HEAD
app.get ("/", function (req,res){

    res.sendFile(__dirname + "/views/index.html")
    
    })
    
    app.get ("*", function (req,res){
    
    res.sendFile(__dirname+ "/public/" + req.url)
    
    })
=======
>>>>>>> b287f6e8cdeb400eacf804282dbb7337fe5a7b66
