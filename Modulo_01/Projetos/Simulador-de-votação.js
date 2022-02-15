const prompt = require("prompt-sync")();

const votos = [0, 0, 0, 0, 0];

function autorizaVoto(anoNascimento) {
  return anoNascimento <= 2004
    ? "Obrigatorio"
    : anoNascimento <= 2002
    ? "Opcional"
    : "Negado";
}

function votacao(autorizacao, voto) {
  if (autorizacao == "Negado") return "Candidato nao pode votar!";
  switch (voto) {
    case 1:
      votos[0]++;
      break;
    case 2:
      votos[1]++;
      break;
    case 3:
      votos[2]++;
      break;
    case 4:
      votos[3]++;
      break;
    case 5:
      votos[4]++;
      break;
    default:
      return "Voto invalido!";
  }
  return "Voto realizado com sucesso!";
}

function exibirResultados() {
  for (let i = 0; i < 3; i++) {
    console.log(`Total de votos do candidato ${i + 1}: ${votos[i]}`);
  }
  console.log(`Total de votos nulo: ${votos[3]}`);
  console.log(`Total de votos branco: ${votos[4]}`);
  console.log(
    "O candidato eleito foi: Candidato " +
      (votos.indexOf(votos.slice(0, 3).sort((a, b) => b - a)[0]) + 1)
  );
  //Acima encontramos o maior numero de votos entre os tres candidatos, entao obter o indice deste
  //candidato com maior numero de votos na lista 'votos'.
}

let validation = "sim";
let voto;
while (validation == "sim") {
  voto = votacao(
    autorizaVoto(+prompt("Digite o ano de nascimento do candidato: ")),
    +prompt("Digite o voto do candidato: ")
  );
  console.log(voto);
  validation = prompt(
    "Ainda possui candidato para votar? Digite `sim`, ou qualquer tecla: "
  ).toLowerCase();
}

exibirResultados();