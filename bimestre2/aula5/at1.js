/*
1. Usando condicional encadeada, resolva com JavaScript e Fluxograma.
Criar um programa que classifica a nota de um aluno em conceitos (MB, B, R, I, NA).
Se a  nota for maior ou igual a 90: menção "MB"
Se a nota for maior ou igual a 80: menção "B"; 
Se a nota for maior ou igual a 70: menção "R";
Se a nota for maior ou igual a 60: menção "I"
Senão atender aos critérios anteriores, menção: "NA".
*/

const prompt = require("prompt-sync") ();

let nota = Number(prompt("Insira a nota do aluno: "));

if(nota >= 90) {
    console.log("Sua nota é: MB");
} else if(nota >= 80){
    console.log("Sua nota é: B");
} else if(nota >= 70){
    console.log("Sua nota é: R");
} else if(nota >= 60){
    console.log("Sua nota é: I");
} else {
    console.log("Sua nota é: NA");
} 