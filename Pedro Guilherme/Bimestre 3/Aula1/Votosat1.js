const prompt = require("prompt-sync");

let nome = String(prompt("Escreva o seu nome: "));
let idade = Number(prompt("Insira a sua idade: "));

if (idade>15){
    if (idade>17) {
        console.log(nome, "o seu voto é obrigatório.");
    }
    else{
        console.log(nome, "o seu voto é valido, mas facultativo");
    }
}
else{
    console.log("A idade inserida é invalida.");
}