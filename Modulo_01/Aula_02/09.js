var prompt = require('prompt-sync')();
const real = prompt("Digite valor em real: ");
const dolar = Number(real.split("R$")[1])*5.4;
console.log("$"+dolar);