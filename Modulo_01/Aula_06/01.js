var prompt = require("prompt-sync")();

let arr = [];
let par = [];
let impar = [];

while (arr.length != 10) {
  arr.push(prompt("Digite um número: "));
}

let i = 0;

do {
  if (arr[i] % 2 === 0) {
    par.push(arr[i]);
  } else {
    impar.push(arr[i]);
  }
  i++;
} while (i < arr.length);

console.log(par);
console.log(impar);
