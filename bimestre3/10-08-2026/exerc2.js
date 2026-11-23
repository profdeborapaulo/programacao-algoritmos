// 2 - Desenvolver em JavaScript e Fluxograma, o cálculo da fórmula de Bhaskara.

const prompt= require("prompt-sync")();
let a = Number(prompt("Insira o valor de A:"));
let b = Number(prompt("Insira o valor de B:"));
let c = Number(prompt("Insira o valor de C:"));
let delta = (b * b) - (4 * a * c);
let x1;
let x2;

if(a = 0){
     console.log("A não pode ser zero");
} else {
console.log("Delta é igual a:", delta);
if(delta < 0){
    console.log("Delta é menor que zero, então não poderemos seguir com o cálculo solicitado");
} else {
    x1 = (-b - delta ** 0.5) / (2 * a);
    x2 = (-b + delta ** 0.5) / (2 * a);
    console.log("O valor de A é:", a);
    console.log("O valor de B é:", b);
    console.log("O valor de C é:", c);
    console.log("O valor de delta é:", delta);
    console.log("O valor de X1 é:", x1);
    console.log("O valor de X2 é:", x2);
}
}