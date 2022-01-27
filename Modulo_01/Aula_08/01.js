let prompt = require('prompt-sync')();

let n = prompt('Digite o numero de linhas: ');
let m = prompt('Digite o numero de colunas: ');

let matriz = [];
let linhas;

for (let i = 0; i < n; i++) {
    linhas = [];
    for (let j = 0; j < m; j++) {
        linhas[j] = j + i; 
    }
    matriz.push(linhas);
}

for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}