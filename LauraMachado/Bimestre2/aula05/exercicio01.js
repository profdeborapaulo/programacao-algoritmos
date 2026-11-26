/* Usando condicional encadeada, resolva com JavaScript e Fluxograma.
Criar um programa que classifica a nota de um aluno em conceitos (MB, B, R, I, NA).
Se a  nota for maior ou igual a 90:  menção "MB"
Se a nota for maior ou igual a 80: menção "B"; 
Se a nota for maior ou igual a  70): menção "R";
Se a nota for maior ou  igual a 60: menção "I"
Se não atender aos critérios anteriores, menção: "NA".*/

let nota = 91

if (nota >= 60 && nota < 70) {
    console.log("O aluno tirou I, com a pontuação de: ", nota)
} else if (nota >= 70 && nota < 80) {
    console.log("O aluno tirou R, com a pontuação de: ", nota)
} else if (nota >= 80 && nota < 90) {
    console.log("O aluno tirou B, com a pontuação de: ", nota)
} else if (nota >= 90 && nota < 100) {
    console.log("O aluno tirou MB, com a pontuação de: ", nota)
} else {
    console.log("A nota é NA")
}