const prompt= require("prompt-sync") ();

let nota1 = Number (prompt("Insira a primeira nota: "));
let nota2 = Number (prompt("Insira a segunda nota do alunos: "));

let media = (nota1 + nota2) / 2;

console.log("media:" , media);