let fs     = require('fs');
let moment = require('moment'); 
//console.log(fs)
let datos = fs.readFileSync(__dirname + '/prueba.txt','utf-8')
console.log(datos);
console.log(__dirname)
console.log(moment().format('MMM Do YYYY'))
