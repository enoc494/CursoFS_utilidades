let doble=(num)=> num*2;
let triple= (num) => num*3;

function aplicarCallback(num, callback){
    return callback(num);
}