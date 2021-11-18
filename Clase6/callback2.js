function agregarHttp(url){
    return "http://"+url
}

function procesar(urls,callback){
    for(let i=0;i<urls.length;i++){
        urls[i] = callback(urls[i])
    }
    return urls
}

let array=["paco2 lacva","hola como están"]
console.log(procesar(array,agregarHttp))