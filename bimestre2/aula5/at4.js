/*
4. Uma academia de natação precisa de um sistema que organize a categoria dos seus atletas, conforme sua idade:
- Menor que 5: "Categoria não permitida!";
- Maior ou igual a 5 e menor ou igual a 7: "Categoria Infantil A";
- Maior que 7 ou menor ou igual a 14: "Categoria Infantil B";
- Maior que 14 e menor ou igual a 17: "Categoria Juvenil";
- Caso contrário: "Categoria Sênior".
*/
const prompt = require("prompt-sync") ();

let idade = prompt("informe a sua idade:");

if(idade < 5){
    console.log("Categoria não permitida!");
} else if(idade >= 5 && idade <= 7){
    console.log("Categoria Infantil A");
} else if(idade > 7 && idade <= 14){
    console.log("Categoria Infantil B");
}else if(idade > 14 && idade <= 17){
    console.log("Categoria Juvenil");
} else{
    console.log("Categoria Sênior");
}