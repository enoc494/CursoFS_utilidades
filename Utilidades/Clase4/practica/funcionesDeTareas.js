const fs = require("fs");
const { PassThrough } = require("stream");


let archivoTareas = {
    archivo: "./tareas.json",
    
    leerJSON:function(){
      return JSON.parse(fs.readFileSync(this.archivo,"utf-8"))
    },

    listar:function(){
        let doc = this.leerJSON()
        //empleando forEach()
        doc.forEach( (element,indice)  => {
          console.log(indice+1+".-"+element.titulo+"estado: "+element.estado)
        });
        return null
    },
    
    escribirJSON:function(array){
      let newIn = JSON.stringify(array,null,'')
      fs.writeFileSync(this.archivo, newIn);
    },

    guardarTarea:function(objTarea){
      //abrir todo lo que se tiene:
      let doc = this.leerJSON() //Forzosamente carga default
      //agregando el objTarea:
      doc.push(objTarea)
      //guardando-reescribiendo todo
      this.escribirJSON(doc)
    },
    borrarUltimo:function()
    {
      let doc = this.leerJSON()
      doc.pop()
      this.escribirJSON(doc)
    },
    leerPorEstado:function(estado){
      let doc = this.leerJSON()
      let filtrados = doc.filter(function(item){
        return item.estado==estado
      })
      filtrados.forEach(function(item){
        console.log(item.titulo)
      })
    }
  

}



module.exports = archivoTareas;