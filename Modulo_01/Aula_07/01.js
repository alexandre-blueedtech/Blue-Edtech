let prompt = require('prompt-sync')();

let n = prompt('Digite um número: ');
let pares = [];
let impares = [];

let i = 0;
while(i <= n){
    if(i % 2 === 0){
        pares.push(i);
    }else{
        impares.push(i);
    }
    i++;
}

console.log(pares);
console.log(impares);
 