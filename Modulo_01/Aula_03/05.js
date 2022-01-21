var prompt = require('prompt-sync')();

const A = +prompt('Numero A: ');
const B = +prompt('Numero B: ');
const C = +prompt('Numero C: ');

let a;
let b;
let c;

if(A <= B){
    a = B;
}else if(A >= C){
    a = A;
}else if(B <= C){
    a = C;
}
if(a === A)
{
    if(B <= C){
        b = C;
    }else{
        b = B;
    }
}
if(b === A)
{
    if(C <= B)
        c = C;
    else
        c = B;
}

console.log(a, b, c);
