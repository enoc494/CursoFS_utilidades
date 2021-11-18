const sumar  = require("./suma.js")
const restar = require("./restar.js")
const multiplicar = require("./multiplicar.js")
const dividir = require("./division.js")


let div2 = require("./division.js")
div2 = require("./suma.js") 
// import restar from "./restar"

const suma = sumar(1,2)
const resta = restar(1,2)
const multiplicacion = multiplicar(2,10) 
const division = dividir(10,0)
const division2 = div2(10,10)


console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(division2)