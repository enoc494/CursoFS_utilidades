let autos = require("./autos.js")

const concesionaria = {
    autos:autos,
    buscarAuto:function(patente){
        let posibles = autos.filter(function(auto){
            return auto.patente==patente;
        })
        return  posibles.length==1 ? posibles[0] : null
    },
}

let a = concesionaria.buscarAuto("APL124")

console.log(autos.indexOf)