var prompt = require('prompt-sync')();

let idade = [];
let altura = [];
let media_idade = 0;
let media_altura = 0;
let i = 0;

while(i < 5){
    console.log(`Digite idade e altura da pessoa ${i+1}:`)
    idade.push(+prompt());
    altura.push(+prompt());
    media_idade += idade[i];
    media_altura += altura[i];
    i++;
}

console.log(`A média da idade é ${media_idade / 5} e média da altura ${media_altura / 5}`);

