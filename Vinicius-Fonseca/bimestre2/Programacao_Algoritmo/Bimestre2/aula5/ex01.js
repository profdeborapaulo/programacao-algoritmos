/*1. Desenvolver um pograma que valide o login de um usuario. se o usuario digitar no login: admin e na 1234, vai mostrar na tela: "Usuário logado com sucesso!", caso contrário, aparecerá a mensagem: "Acesso negado!".*/
const prompt= require("prompt-sync")();
const login = prompt("Insira o Login: ");
const senha = prompt("Insira sua Senha: ");

if (login === "admin" && senha === "1234") {
    console.log("Usuário logado com sucesso!");
} else {
    console.log("Acesso negado!");
}