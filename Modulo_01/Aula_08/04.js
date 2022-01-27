let prompt = require('prompt-sync')();

const modelos = ["lata velha","flash","preto","azul","vermelho"];
const consumo = [8,7,7,20,13];

let menorConsumo = consumo[0];

for (let j = 1; j < 5; j++) {
    if(menorConsumo > consumo[j]){
    menorConsumo = consumo[j];    
    }
}

let indice = [];

for (let j = 0; j < 5; j++) {
    if(menorConsumo == consumo[j])
    indice.push(j);    
}

if(indice.length > 1){
    console.log("Os modelos dos carros mais economicos são:");
    for(let i = 0; i < indice.length; i++){
        console.log(modelos[indice[i]]);
    }
}else{
    console.log("O modelo do carro mais economico é: "+modelos[indice[0]]);
}
