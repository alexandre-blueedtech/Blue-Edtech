var prompt = require("prompt-sync")();

let quantidade_alunos = +prompt("Digite a quantidade de alunos: ");
let nome = [];
let nota = [];
let media = 0;
let i = 0;

while (i < quantidade_alunos) {
  nome.push(prompt(`Digite nome do aluno ${i + 1}: `));
  nota.push(+prompt(`Digite nota do aluno ${i + 1}: `));
  media += nota[i];
  i++;
}
i = 0;
while (i < quantidade_alunos) {
  console.log(nome[i], nota[i]);
  i++;
}
console.log(`A média total das notas é: ${media / quantidade_alunos}.`);
