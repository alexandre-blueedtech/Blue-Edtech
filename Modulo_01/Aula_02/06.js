var prompt = require('prompt-sync')();

var vidaMonstro = +prompt('Digite a vida do monstro: ');
var ataqueJogador = +prompt('Digite o valor de ataque do jogador: ');

if(vidaMonstro < 10 || vidaMonstro > 50 || ataqueJogador < 5 || ataqueJogador > 10){
    console.log("Valor inserido inválido!");
}
else{
    console.log(`O jogador irá derrotar o monstro em ${Math.ceil(vidaMonstro/ataqueJogador)} turnos`);
}