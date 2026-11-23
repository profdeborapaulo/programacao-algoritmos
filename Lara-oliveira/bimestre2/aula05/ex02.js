/*
Desenvolva um programa que valide o login de um usuário, se o usuário digitar no login: admin e na senha:1234 o usuario sera logado com sucesso, senao o acesso sera negado
*/

import promptSync from 'prompt-sync';
const prompt = promptSync(); 

const login = "admin";
const senha = "1234";

let d_login = prompt("Digite seu login: ")
let d_senha = prompt("Digite sua senha: ")

if (d_login == login && d_senha == senha) {
    console.log("Usuario logado com sucesso.")
}else {
    console.log("Acesso negado.")
}