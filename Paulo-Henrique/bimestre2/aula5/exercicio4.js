/*
3. Uma academia de natação precissa de um sistemas que organize a categoria dos seus atletas, conforme a sua idade:
- menor que 5:"Categoria não permitida"
- maior ou igual a 5 e menor ou igual a 7: "categoria infantil A";
- maior que 7 e menor ou igual a 13: "Categoria infantil B";
- maior de 14 e menor ou igual a 17: "Categoria juvenil";
- caso contrario: "Categoria Sênior". */
const prompt = require("prompt-sync")();
let idade = Number(prompt("insira a idade do atleta: "));
if (idade < 5) {
    console.log("Categoria não permitida");
} else if (idade >= 5 && idade <= 7) {
    console.log("categoria infantil A");
} else if (idade > 7 && idade <= 13) {
    console.log("Categoria infantil B");
} else if (idade >= 14 && idade <= 17) { 
    console.log("Categoria juvenil");
} else {
    console.log("Categoria Sênior");
}