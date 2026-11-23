/*
Atividade de Aula
Usando condicional encadeada, resolva com JavaScript e Fluxograma.
 
Criar um programa que classifica a nota de um aluno em conceitos (MB, B, R, I, NA).
Se a  nota for maior ou igual a 90:  menção "MB"
Se a nota for maior ou igual a 80: menção "B"; 
Se a nota for maior ou igual a  70): menção "R";
Se a nota for maior ou  igual a 60: menção "I"
Senão atender aos critérios anteriores, menção: "NA".
*/
const prompt= require("prompt-sync")();
let nota = prompt("insira a nota do aluno: ");  
if (nota >= 90){
    console.log("Menção MB");
} else if (nota >= 80){
    console.log("Menção B");
} else if (nota >= 70){
    console.log("Menção R");
} else if (nota >= 60){
    console.log("Menção I");
} else {
    console.log("Menção NA");
}   