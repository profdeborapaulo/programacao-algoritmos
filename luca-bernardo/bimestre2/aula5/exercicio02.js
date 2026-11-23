const prompt= require("prompt-sync") ();

let usuario;
let senha;

usuario =  prompt("Insira seu usuário: ");
senha =  Number (prompt("Insira sua senha: "));

if (usuario == "admin" && senha == 1234){
    console.log("Usuário logado com sucesso!");
} else {
    console.log("Acesso Negado!");
}