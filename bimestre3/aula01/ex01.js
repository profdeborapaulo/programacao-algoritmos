const prompt = require('prompt-sync');

let nome = prompt("Insira seu nome: ");
let idade = Number(prompt("Insira sua idade: "));

if (idade<16){
    console.log("O usuário " + nome + " não pode votar.")
}else if (idade>=16 && idade<18) {
    console.log("O usuário "+ nome + " tem voto facultativo.")
}else {
    console.log("O usuário "+ nome + " tem voto obrigatório.")
}