var prompt = require("prompt-sync")();

let numero = prompt("Digite um numero par: ");

while (numero % 2 !== 0)
  numero = prompt("Numero não é par! Digite novamente: ");
