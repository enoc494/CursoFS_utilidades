console.log("Aplicación de tareas");

let tarea = {
    titulo: "práctica switch",
    descripción: "Entender para qué puedo usarlo",
    estado: "pendiente"
}

let tareas = [
    {
        titulo: "práctica for",
        descripción: "Entender para qué puedo usarlo",
        estado: "en progreso"
    },
    {
        titulo: "práctica literal vs JSON",
        descripción: "Entender para qué puedo usarlo",
        estado: "en progreso"
    },
    {
        titulo: "práctica switch",
        descripción: "Entender para qué puedo usarlo",
        estado: "pendiente"
    }
];



//console.log(tareas[1].titulo)

for( let i = 0;i<tareas.length;i++){
    console.log(i+1+" - "+tareas[i].titulo)
}


let tareaNueva = {
    titulo : "practicar inglés",
    descripción: "Entender nueva gramatica",
    estado: "pendiente"
}

tareas.push(tareaNueva)

for( let i = 0;i<tareas.length;i++){
    console.log(i+1+" - "+tareas[i].titulo)
}

let stringJSON = JSON.stringify(tareas)

const fs = require("fs")

