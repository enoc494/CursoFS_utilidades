let curso = {
    cantidadAlumnos :32,
    docentes: ["Nacho","Javier"],
    horario: "de 2 a 3 hrs",

    auto:function(marca){
        this.marca = marca
    }
}

console.log(curso)

//Estos primeros dos son indefinidos
console.log(curso.marca)
console.log(curso.auto("lol"))

console.log(curso.marca)