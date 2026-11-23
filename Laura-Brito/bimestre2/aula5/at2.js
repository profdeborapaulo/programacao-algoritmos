/*
2. Desenvolver um programa que valide o login de um usuário. Se o usuário digitar no login: "admin" e na senha: "1234", vai mostrar na tela: "Usuário logado com sucesso!", caso contrário, aparecerá a mensagem: "Acesso negado!".
*/
const prompt = require("prompt-sync") ();
let login = prompt("Insira o nome: ");
let senha = Number(prompt("Insira a senha: "));

if(login == "admin" && senha == 1234){
    console.log("Usuário logado com sucesso!");
} else {
    console.log("Acesso Negado!");
}