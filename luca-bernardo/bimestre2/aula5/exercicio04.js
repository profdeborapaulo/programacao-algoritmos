const prompt= require("prompt-sync") ();

let idade;

idade = Number(prompt("Olá! Qual é a idade do atleta? "));

if (idade < 5 ) {
    console.log("Categoria não permitida!");
} else if (idade >= 5 && idade <= 7 ) {
    console.log("Categoria Infantil A");
} else if (idade > 7 && idade <= 14) {
    console.log("Categoria Infantil B");
} else if (idade > 14 && idade <= 17) {
    console.log("Categoria Juvenil");
} else {
    console.log("Categoria Sênior");
}