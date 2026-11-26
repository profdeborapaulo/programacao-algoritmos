const prompt = require("prompt-sync")();

let a = Number(prompt("insira um valor para A:"));
let b = Number(prompt("Escreva um valor para B:"));
let c= Number(prompt("Escreva um valor para C:"));

var delta = b ** 2 -4 * a * c;
var resultadoa = (-b+(delta**0.5))/2*a;
var resultadob = (-b-(delta**0.5))/2*a;

console.log ("os resultados são:", resultadoa, resultadob);