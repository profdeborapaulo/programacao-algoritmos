const prompt= require("prompt-sync") ();

let nota;

nota = Number (prompt("Insira a nota do aluno: "));

if (nota >= 90 ) {
    console.log ("A menção do aluno é MB")
} else if (nota >= 80) {
    console.log ("A menção do aluno é B")
} else if (nota >= 70) {
    console.log ("A menção do aluno é R")
} else if (nota >= 60) {
    console.log ("A menção do aluno é I")
} else {
    console.log ("A menção do aluno é NA")
}