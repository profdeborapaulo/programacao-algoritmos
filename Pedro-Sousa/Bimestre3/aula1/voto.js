/*1. Desenvolver um programa que receba o nome e a idade de um cidadão em anos. Em seguida, o programa irá avaliar e responder se a idade digitada é valida, 
se for válida, se o voto é obrigatório ou facultativo (opcional). Ao final, exibir as informações. Faça em Java script e Fluxograma. */

const prompt=require("prompt-sync")();

let nome = prompt("Insira seu nome:");    
let idade = Number(prompt("Insira sua idade:"));  

if (idade >= 16 && idade < 18) {

    console.log(nome, "Seu voto é facultativo (opcional).");

} else if (idade >= 18 && idade < 70) {

    console.log(nome, "Seu voto é obrigatório.");

} else if (idade >= 70) {

    console.log("Senhor(a)",nome, ", Seu voto é facultativo (opcional).");

} else {

    console.log("Você é incapaz de votar.");

}

