var prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let salario = prompt("Digite seu salário: ");
let estadoCivil = prompt("Digite seu estado civil: ");

while (!(nome.length > 3)) {
  console.log("Nome invalido!");
  nome = prompt("Digite seu nome: ");
}
while (!(0 < idade && idade < 150)) {
  console.log("Idade invalida!");
  idade = prompt("Digite sua idade: ");
}
while (!(salario > 0)) {
  console.log("Salário invalido!");
  salario = prompt("Digite seu salário: ");
}
while (
  !(
    estadoCivil == "s" ||
    estadoCivil == "c" ||
    estadoCivil == "v" ||
    estadoCivil == "d"
  )
) {
  console.log("Estado civil invalido!");
  estadoCivil = prompt("Digite seu estado civil: ");
}
