/*
Através do encadeamento de if, desenvolva um programa para avaliar pela media de um aluno se ele está aprovado, reprovado ou de recuperação
Regras:
media menor ou igual a 5: reprovado
media maior do que 5 e menor que 6: recuperação 
media maior ou igual a 6: aprovado
*/
const prompt= require("prompt-sync")();
let media = prompt("insira a média do aluno: ");
if (media <= 5){
    console.log("Reprovado");
} else if (media > 5 && media < 6){
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}