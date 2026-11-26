/*1- Desenvolver um programa que receba nome e a idade em anos de um cidadão.
Em seguida o programa irá avaliar e responder se a idade digitada é valida, se for válida se o voto é obrigatório ou facultativo.
Ao final exibir as informações*/

let nome = "Neuvillette";
let idade = 500;

if (idade <= 15) {
    console.log(nome, ", sua idade não é válida...");
}
else if (idade > 15 && idade < 18) {
    console.log(nome, ", sua idade é válida, mas o voto é facultativo.");
}
else if (idade > 70) {
    console.log(nome, ", sua idade é válida, mas o voto é facultativo.");
}
else {
    console.log(nome, ", sua idade é válida e o voto é obrigatório.");
}