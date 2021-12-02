//Objeto con las funcionalidades
const express = require("express");

//Instancia del objeto
const app     = express();

app.get("/",function(req,res){
    res.send("Bienvenido");
});

app.listen(3000,()=> {console.log("Servidor operativo")});





