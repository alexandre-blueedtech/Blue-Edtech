var prompt = require('prompt-sync')();

const A = +prompt('Numero A: ');
const B = +prompt('Numero B: ');

if(A % B === 0){
    console.log("A é multiplo de B.");
}else if(B % A  === 0){
    console.log("B é multiplo de A.")
}else{
    console.log("A e B não são multiplos um do outro.")
}