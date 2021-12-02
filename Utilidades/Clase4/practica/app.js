

let action = process.argv[2];
//let tituloTarea = process.argv[3];

//console.log(process.argv)

let archivoTareas = require("./funcionesDeTareas.js")

//console.log(action)

switch (action){
    case "listar":
        console.log("listado de tareas:")
        archivoTareas.listar()
        break;
    case "leer":
        console.log("leyendo el archivo: ")
        archivoTareas.leerJSON() 
        break;
    case "crear":
        console.log("Se agregará un nuevo elemento:")
        if (process.argv[3]==undefined){
            console.log("Necesitas declarar el título de tu nueva tarea")
        }
        else{
            let tareaNueva = {
                titulo : process.argv[3],
                estado : "pendiente",
            }
            archivoTareas.guardarTarea(tareaNueva);
        }
        break;
    case "borrarUltimo":
        archivoTareas.borrarUltimo();
        break;
    case "filtrar":
            console.log("Se filtraran los elementos:")
            if (process.argv[3]==undefined){
                console.log("Necesitas declarar el estado a filtrar")
            }
            else{
                archivoTareas.leerPorEstado(process.argv[3]);
            }
            break;
    case undefined:
        console.log("Tienes que indicar alguna acción")
        break;
    default:
        console.log("No entiendo que quieres hacer")
        console.log("Las acciones disponibles son: listar,leer,crear,borrarUltimo")
}


//let tareas = fs.open("./tareas.json")








