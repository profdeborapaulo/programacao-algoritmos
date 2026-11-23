const prompt= require("prompt-sync")();
let nota1= prompt("Insira a primeira nota: ");
let nota2= prompt("Insira a segunda nota do aluno: ");

let media= (nota1+nota2)/2

console.log("Media: ", media);