let amigos = [
 "Coco","Pablito","SuS"   
]
console.log(amigos)

// String to JSON
let amigosJSON= JSON.stringify(amigos)
console.log(amigosJSON)

//JSON to String
console.log(JSON.parse(amigosJSON))

let persona = {
    nombre: "cari",
    edad: 26,
    domicilio: "calle falsa 123"
}

console.log(persona)
console.log(JSON.stringify(persona))
console.log(JSON.parse(JSON.stringify(persona)))
