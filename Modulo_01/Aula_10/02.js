let prompt = require('prompt-sync')();

function printInversedArray(nomes) {
  for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i].split("").reverse().join(""));
  }
}

let n = +prompt('Digite o numero de nomes: ');
let nomes = [];

do{
    nomes.push(prompt('Digite o nome: '));
}while(nomes.length < n);

let tempMaior = nomes[0].length;
let tempMenor = nomes[0].length;

for (let index = 1; index < nomes.length; index++) {
    if (tempMaior < nomes[index].length) tempMaior = nomes[index].length;
    if (tempMenor > nomes[index].length) tempMenor = nomes[index].length;
}

let maiorNome = [];
let menorNome = [];

for (const value of nomes) {
    if(value.length === tempMaior) maiorNome.push(value);
    if(value.length === tempMenor) menorNome.push(value);
}

console.log('Nomes invertidos: ');
printInversedArray(nomes);

console.log('Nomes maiores: ');
for (const value of maiorNome) {
    console.log(value);
}
console.log('Nomes menores: ');
for (const value of menorNome) {
    console.log(value);
}
