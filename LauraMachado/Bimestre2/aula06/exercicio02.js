//2- Desenvolver um programa em JS e fluxograma (flowgorithm) que calcule a fórmula de bhaskara
const prompt= require("prompt-sync")();

const a = Number(prompt("Informe o valor a:"));
const b = Number(prompt("Informe o valor b:"));
const c = Number(prompt("Informe o valor c:"));
const D = b ** 2 - 4 * a * c;
const Dr = D ** 0.5
console.log(D)