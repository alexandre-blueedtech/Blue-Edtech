const prompt = require('prompt-sync')();

Array.prototype.removeListElement = function(value){
    const index = this.indexOf(value);
    if (index === -1) return -1
    else
    return this.splice(index, 1);
}

function adcionar(nome, telefone){
    this.nome = nome;
    this. telefone = telefone;
}

const lista = [];
let validation = 's';

do {
    validation = prompt("Deseja adcionar um novo contato? Pressione 's', se sim: ");
    if(validation != 's') break;
    lista.push(new adcionar(prompt("Digite o nome do contato: "), prompt("Digite o telefone do contato: ")));
} while (validation === 's');

console.log(lista);

function alterar(nome, novoTelefone){
    const index = lista.find(a => a.nome === nome);
    if(index === undefined) {
        console.log("Contato nao existe!");
        return -1;
    }else{
            for (const contato of lista) {
            if(contato.nome === nome) contato.telefone = novoTelefone;
        }
    }
}

do {
    validation = prompt("Deseja alterar um contato? Pressione 's', se sim: ");
    if(validation != 's') break;
    alterar(prompt("Digite o nome do contato: "), prompt("Digite o novo telefone do contato: "));
} while (validation === 's');

console.log(lista);

function apagar(nome){
    const index = lista.find(a => a.nome === nome);
    if(index === undefined) {
        console.log("Contato nao existe para ser apagado!");
        return -1;
    }else{
            for (const contato of lista) {
            if(contato.nome === nome) lista.removeListElement(contato);
        }
    }
}

do {
    validation = prompt("Deseja apagar um contato? Pressione 's', se sim: ");
    if(validation != 's') break;
    apagar(prompt("Digite o nome do contato para ser apagado: "));
} while (validation === 's');

console.log(lista);

function consultar(nome){
    const index = lista.find(a => a.nome === nome);
    if(index === undefined) {
        console.log("Contato nao existe!");
        return -1;
    }else{
            for (const contato of lista) {
            if(contato.nome === nome) console.log(contato.telefone);
        }
    }
}

do {
    validation = prompt("Deseja consultar um contato? Pressione 's', se sim: ");
    if(validation != 's') break;
    consultar(prompt("Digite o nome do contato para ser consultado: "));
} while (validation === 's');

console.log(lista);