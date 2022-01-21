var prompt = require('prompt-sync')();

let p1_Nome = prompt('Digite o nome da peça 1: '); 
let p1_Quantidade = +prompt('Digite o numero de peças 1: '); 
let p1_Valor = +prompt('Digite o valor unitario da peça 1: '); 


let p2_Nome = prompt('Digite o nome da peça 2: '); 
let p2_Quantidade = +prompt('Digite o numero de peças 2: '); 
let p2_Valor = +prompt('Digite o valor unitario da peça 2: '); 

console.log("O valor total a ser pago de peças " + p1_Nome + ` é: ${p1_Quantidade*p1_Valor}`);
console.log("O valor total a ser pago de peças " + p2_Nome + ` é: ${p2_Quantidade*p2_Valor}`);
console.log(`O valor total a ser pago de todas as peças é: ${p1_Quantidade*p1_Valor + p2_Quantidade*p2_Valor}`);