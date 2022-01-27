let prompt = require('prompt-sync')();

let carEspecial = ['!','@','#','$','%','&','*'];

let senha = "";
let count1 = 0;
let count2 = 0;
let count3 = 0;

while (senha.length < 8 && count3 == 0) {
    senha = prompt('Digite a senha: ');
    if(senha.length < 8) console.log("Senha inválida!");
    if(count3 > 0) continue;
    count1 = 0;
    count3 = 0;
    while (count1 < senha.length) {
        count2 = 0;
        while (count2 < carEspecial.length) {
            if(carEspecial[count2] == senha[count1]){
                count3++;
                continue;
            }
            count1++;
        }
    }

}

let count = 0;
while (count < senha.length) {
    
}