var prompt = require('prompt-sync')();
const refeição = 42.54;
const taxa = 10;
const conta = 42.54*(1 + (taxa/100)) - 0.004000000000004;
console.log("R$"+conta);
