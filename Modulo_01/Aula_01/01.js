var prompt = require('prompt-sync')();
let A = +prompt('Digite a nota do aluno A: ');
let B = +prompt('Digite a nota do aluno B: ');

console.log(`A média do aluno é ${(A*4 + B*6)/10}`);