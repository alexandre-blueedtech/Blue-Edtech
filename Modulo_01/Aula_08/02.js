let prompt = require('prompt-sync')();
let n = +prompt('Digite um numero para o calculo do seu fatorial: ');
let fatorial = 1;
for (let i = 1; i <= n; i++) {
    fatorial *= i
}
console.log(fatorial);