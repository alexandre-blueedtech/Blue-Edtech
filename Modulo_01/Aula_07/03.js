let prompt = require('prompt-sync')();

let arr = [];
let i = 0;

while(i < 20){
    arr.push(Math.floor(Math.random()*101));
    i++;
}
arr.sort((a,b) => a - b);
console.log(arr);