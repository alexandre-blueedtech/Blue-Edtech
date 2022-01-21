var prompt = require('prompt-sync')();

console.log("Você é um estudante do curso de bacharelado em matemática na UFPE e está em seu");
console.log("último semestre de curso. Se sentindo muito ansioso e motivado para concluir seu");
console.log("curso, você precisará atingir certos critérios na sua rotina para garantir as a-");
console.log("provações necessárias em todas as disciplinas e enfim se tornar um matemático.\n");
console.log("Responda, com Sim ou Não, as seguintes perguntas referentes a estes critérios:\n");

let pergunta_1 = prompt("Houve presença em mais de 70% da carga horária total de aulas? ");
let pergunta_2 = prompt("Tirou dúvidas com professores e colegas? ");
let pergunta_3 = prompt("Absorveu o assunto das aulas? ");
let pergunta_4 = prompt("Estudou pelo menos quatro horas por dia fora do horário de aula? ");
let pergunta_5 = prompt("Resolveu vários exercicios de cada disciplina? ");

console.log("As repostas foram "+pergunta_1+", "+pergunta_2+", "+pergunta_3+", "+pergunta_4+" e "+pergunta_5+".");

let i = 0;
if(pergunta_1 === "sim" || pergunta_1 === "Sim") i++;
if(pergunta_2 === "sim" || pergunta_2 === "Sim") i++;
if(pergunta_3 === "sim" || pergunta_3 === "Sim") i++;
if(pergunta_4 === "sim" || pergunta_4 === "Sim") i++;
if(pergunta_5 === "sim" || pergunta_5 === "Sim") i++;

if(i === 0) console.log("Você foi reprovado em todas as disciplinas!");
if(i === 1 || i === 2) console.log("Você foi reprovado em todas as disciplinas, porém os professores lhe darão uma segunda chance fazendo outros testes finais.");
if(i === 3) console.log("Você foi aprovado em algumas disciplinas e reprovado em outras, e portanto, não se formou.");
if(i === 4) console.log("Você foi aprovado em todas as disciplinas, porém teve que fazer final.");
if(i === 5) console.log("Você foi aprovado por média em todas as disciplinas!");