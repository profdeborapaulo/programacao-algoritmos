/* 1- Desenvolver um programa que receba o nome e a idade de um cidadão em anos em seguida, o programa irá avaliar e responder se a idade digitada é válida, 
se for válida se o voto é obrigatório ou facultativo. Ao final exibir as informações faça em JavaScript e fluxograma */



const prompt= require("prompt-sync")();

let nome= prompt ("Insira seu nome:");
let idade= prompt ("Digite sua idade:");

if (idade >= 16){
 if ( idade >= 18 && idade <= 70){
    console.log ("Olá!", nome)
    console.log ("Seu voto é obrigatório!")
 } else {
     console.log ("Olá!", nome)
    console.log (" Seu voto é facultativo")
 }
} else {
     console.log ("Olá!", nome)
    console.log ("Idade inválida")
}