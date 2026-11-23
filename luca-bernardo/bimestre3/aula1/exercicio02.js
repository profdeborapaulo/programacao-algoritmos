const prompt= require("prompt-sync") ();

let a;
let b;
let c;
let delta;
let raizDelta;
let x1;
let x2;

console.log("Olá! Bem vindo ao sistema.");
console.log("Insira as informações solicitadas para realizar o cálculo da fórmula de Bhaskara.");

a = Number (prompt("Insira o valor de A: "));
b = Number (prompt("Insira o valor de B: "));
c = Number (prompt("Insira o valor de C: "));

delta = b ** 2 - 4 * a * c;
raizDelta = delta ** 0.5;

if (delta < 0 || a === 0) {
    console.log("A equação não possuí raizes reais ou é uma equação de 1º Grau.");
} else {

x1 = (-b + raizDelta) / 2*a;
x2 = (-b - raizDelta) / 2*a;

console.log("Resultado:");
console.log("Valor de Delta: " , delta);
console.log("X¹ =" , x1);
console.log("X² = " , x2);

};