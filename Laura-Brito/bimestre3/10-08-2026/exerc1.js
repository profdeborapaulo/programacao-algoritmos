// 1 - Desenvolver um programa que receba o nome e a idade de um cidadão em anos. Em seguida, o programa irá avaliar e responder se a idade digitada é válida, se pela idade válida o voto é opcional ou obrigatório. Ao final exibir as informações. Faça em JavaScript e Fluxograma.

const prompt = require("prompt-sync")();
let nome = prompt("Escreva seu nome:");
let idade = Number(prompt("Escreva sua idade:"));

if(idade >= 16){
    console.log("Idade válida");
    if(idade >= 18 && idade < 70){
        console.log("Seu nome é:", nome);
        console.log("Seu voto é obrigatório");
    } else {
        console.log("Seu nome é:", nome);
        console.log("Seu voto é facultativo");
    }
} else {
    console.log("Idade inválida");
}