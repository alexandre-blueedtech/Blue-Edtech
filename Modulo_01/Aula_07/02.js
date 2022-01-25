let prompt = require('prompt-sync')();

let n = prompt('Digite a quantidade de notas: ');
let notas = [];

let i = 0;
while (i < n) {
    notas.push(+prompt(`Digite nota ${i+1}: `));
    i++;
}
let j = 0;
let k = 0;
let m = 0;
i = 0;
while (i < n) {
    if(notas[i] >= 7){
        j++;
    }else if(notas[i] > 5 && notas[i] < 7){
        k++;
    }else{
        m++;
    }
    i++;
}
if(j > 0) console.log(`Número de alunos aprovados é ${j}`);
if(k > 0) console.log(`Número de alunos em recuperação é ${k}`);
if(m > 0) console.log(`Número de alunos reprovados é ${m}`);
