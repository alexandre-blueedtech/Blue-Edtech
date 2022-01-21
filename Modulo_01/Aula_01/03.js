var prompt = require('prompt-sync')();

var idade_Ano = +prompt("Idade em anos: ");
var idade_Meses = +prompt("Idade em meses: ");
var idade_Dias = +prompt("Idade em dias: ");

console.log(`O total de dias é ${idade_Ano*365  + idade_Meses*30 + idade_Dias}`);