var prompt = require('prompt-sync')();

var idade_Dias = +prompt("Idade em dias: ");
var anos = Math.floor(idade_Dias/365);
var meses = Math.floor((idade_Dias % 365)/30);
var dias = (idade_Dias % 365) % 30;

console.log(`A idade é ${anos} anos, ${meses} meses e ${dias} dias.`);