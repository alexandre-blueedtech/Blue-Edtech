var prompt = require("prompt-sync")();

var choices = ["pedra", "papel", "tesoura"];

//Retorna true se a ganha, retorna false se a perde e retorna -1 em caso de empate.
function winGame(a, b) {
  if (a == b) return -1;
  if (a == choices[0] && b == choices[1]) return false;
  if (a == choices[0] && b == choices[2]) return true;
  if (a == choices[1] && b == choices[0]) return true;
  if (a == choices[1] && b == choices[2]) return false;
  if (a == choices[2] && b == choices[0]) return false;
  if (a == choices[2] && b == choices[1]) return true;
}

let rodadas;
let playerChoice;
let computerChoice;
let playerScore;
let computerScore;
let play = "sim";

//Loop para partidas.
while (play == "sim") {
  rodadas = +prompt("Quantas rodadas deseja jogar? ");
  playerScore = 0;
  computerScore = 0;
  //Loop para rodadas.
  for (let i = 0; i < rodadas; i++) {
    playerChoice = prompt(
      "Escolha 'Pedra', 'Papel ou 'Tesoura': "
    ).toLowerCase();
    computerChoice = choices[Math.floor(Math.random() * 3)];

    while (
      playerChoice != choices[0] &&
      playerChoice != choices[1] &&
      playerChoice != choices[2]
    )
      playerChoice = prompt(
        "Escolha Inválida! Escolha 'Pedra', 'Papel ou 'Tesoura': "
      ).toLowerCase();

    console.log("A escolha do computador é " + computerChoice + ".");

    if (winGame(playerChoice, computerChoice) === -1) {
      console.log("Rodada empatada!");
      continue; //Necessário, pois o else abaixo pode ser validado!
    }
    if (winGame(playerChoice, computerChoice)) {
      console.log("Você venceu esta rodada!");
      playerScore++;
    } else {
      console.log("Você perdeu esta rodada!");
      computerScore++;
    }
  }
  console.log("Rodadas encerradas!");
  console.log(`Você marcou ${playerScore} ponto(s)!`);
  console.log(`O computador marcou ${computerScore} ponto(s)!`);
  
  if (playerScore === computerScore) console.log("A partida está empatada!");
  if (playerScore > computerScore) console.log("Você ganhou a partida!");
  if (playerScore < computerScore) console.log("Você perdeu a partida!");

  play = prompt(
    `Deseja jogar novamente? Responda 'sim' se deseja continuar, ou qualquer coisa para encerrar o jogo: `
  ).toLowerCase();
}
