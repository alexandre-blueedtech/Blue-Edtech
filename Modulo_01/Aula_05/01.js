var prompt = require("prompt-sync")();

let usuario = prompt("Digite seu nome de usuario: ");
let senha = prompt("Digite sua senha: ");

do {
  if (usuario == senha) {
    console.log("Sua senha não pode ser igual ao usuario!");
    senha = prompt("Digite sua senha: ");
  }
} while (usuario == senha);
