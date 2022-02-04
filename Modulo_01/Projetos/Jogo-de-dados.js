const prompt = require('prompt-sync')();

function jogador(nome, dado, pontuacao){
    this.nome = nome;
    this.dado = dado;
    this.pontuacao = pontuacao;
}

const rodadas = +prompt("Digite o numero de rodadas: ");
const quantidade_jogadores = +prompt("Digite o numero de jogadores: ");
const lista = [];

for (let i = 0; i < quantidade_jogadores; i++) {
    lista.push(new jogador(prompt(`Digite o nome do jogador ${i+1}: `), 0, 0));    
}

let dados;
let maiorDado;
let vencedoresRodada;

for (let i = 0; i < rodadas; i++) {
    dados = [];
    for (let j = 0; j < lista.length; j++) {
        dados.push(Math.floor(Math.random()*6) + 1);
        lista[j].dado = dados[j];       
    }

    maiorDado = dados.sort((a,b) => a-b)[dados.length - 1];

    for (const value of lista) {
        if(value.dado === maiorDado) value.pontuacao++;
    }
    
    //Verifique os vencedores de cada rodada habilitando o codigo abaixo.
    /*vencedoresRodada = lista.filter(a => a.dado === maiorDado);
    console.log(vencedoresRodada);*/
}
const maiorPontuacao = lista.sort((a,b) => a.pontuacao - b.pontuacao)[lista.length - 1].pontuacao;
const vencedoresJogo = lista.filter(a => a.pontuacao === maiorPontuacao);

console.log(`O(s) vencedor(es) do jogo e(sao): `);
for (const value of vencedoresJogo) console.log(value.nome);


