const prompt = require('prompt-sync')();
const euler = 2.71828;

let population_A = +prompt('Digite a população do país A: ');
let taxa_A = +prompt('Digite a taxa de crescimento populacional do país A: ');
let population_B = +prompt('Digite a população do país B: ');
let taxa_B = +prompt('Digite a taxa de crescimento populacional do país B: ');

let tempo = 0;
while (population_A * (euler ** (taxa_A * tempo)) < population_B * (euler ** (taxa_B * tempo)))
tempo++;

console.log('O tempo necessario para a polução do país A ultrapassar a polução do país B é '+tempo+' anos');