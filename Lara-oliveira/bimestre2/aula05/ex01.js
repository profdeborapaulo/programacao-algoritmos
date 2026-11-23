//dia 01/06/26

/*
Criar um programa que classifica a nota de um aluno em conceitos (MB, B, R, I, NA).
Se a  nota for maior ou igual a 90:  menção "MB"
Se a nota for maior ou igual a 80: menção "B"; 
Se a nota for maior ou igual a  70): menção "R";
Se a nota for maior ou  igual a 60: menção "I"
Senão atender aos critérios anteriores, menção: "NA".
*/

import promptSync from 'prompt-sync';
const prompt = promptSync(); 

let num = prompt("Sua nota: ");

if (num >=90) {
    console.log("Aluno com menção MB")
}else if (num>=80 && num<90) {
    console.log("Aluno com menção B")
}else if (num>=70 && num<80) {
    console.log("Aluno com menção R")
}else if (num >=60 && num<70){
    console.log("Aluno com menção I")
}else {
    console.log("Aluno com menção N/A")
}
