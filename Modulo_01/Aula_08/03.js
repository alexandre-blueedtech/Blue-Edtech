let prompt = require('prompt-sync')();

let n = +prompt('Digite um numero: ');

for (let i = 1; i <= 10; i++) {
        console.log(`${n}*${i} = ${n*i}`);
}