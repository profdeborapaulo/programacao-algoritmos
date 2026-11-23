/* 
Criar um programa que classifica a nota de um aluno em conceitos (MB, B, R, I, NA).
Se a  nota for maior ou igual a 90:  menção "MB"
Se a nota for maior ou igual a 80: menção "B"; 
Se a nota for maior ou igual a  70): menção "R";
Se a nota for maior ou  igual a 60: menção "I"
*/
const prompt=require("prompt-sync")();

let nota = Number(prompt("Insira a nota do aluno:"));
let mencao;

 if (nota >= 60 && nota < 70) {

    mencao = "I";

}  else if (nota >= 70 && nota < 80) {

    mencao = "R";

} else if (nota >= 80 && nota < 90) {

    mencao = "B";

} else if (nota >= 90 ) {

    mencao = "MB";

} else {

    mencao = "NA";

} 

console.log("A menção do aluno foi:", mencao)