/*
1. desenvolver um programa que valide o login de um usuario.
so o usuario digitar no login: admin e na senha 1234, vai
mostrar na tela: "usuario legado com sucesso!", caso contrario,
aparecerá a mensagem: "acesso negado!".
*/
const login = prompt("Digite o login:");
const senha = prompt("Digite a senha:");

if (login === "admin" && senha === "1234") {
    alert("Usuário logado com sucesso!");
} else {
    alert("Acesso negado!");
}