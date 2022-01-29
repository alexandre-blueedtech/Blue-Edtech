let prompt = require("prompt-sync")();

let n = +prompt("Digite a quantidade de numeros: ");
let lista = [];

while (lista.length < n) {
  lista.push(+prompt("Digite um item: "));
}
let tempMin = lista[0];
let tempMax = lista[0];
let soma = 0;
for (let key in lista) {
  key = Number(key);
  soma += lista[key];
  if (lista[key] < tempMin) tempMin = lista[key];
  if (lista[key] > tempMax) tempMax = lista[key];
}
console.log(tempMin, tempMax, soma);
