/*
Criar um programa que classifica a nota de um aluno em conceitos (MB, B, R, I, NA).
Se a  nota for maior ou igual a 90:  menção "MB"
Se a nota for maior ou igual a 80: menção "B"; 
Se a nota for maior ou igual a  70): menção "R";
Se a nota for maior ou  igual a 60: menção "I"
Senão atender aos critérios anteriores, menção: "NA".
*/
let nota = 90

if (nota >= 90){
    console.log("aluno com menção MB")
} else if (nota >= 80 && nota <90) {
    console.log("aluno com menção B")
} else if (nota >= 70 && nota <80) {
    console.log("aluno com menção R")
} else if (nota >= 60 && nota <70) {
    console.log("aluno com menção I")
} else {
    console.log("aluno com menção NA")
}