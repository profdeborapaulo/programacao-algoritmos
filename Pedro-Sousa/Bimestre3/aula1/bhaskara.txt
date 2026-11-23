//2. Desenvolver um programa em Java script e Fluxograma que calcule a fórmula de Bhaskara.

const prompt=require("prompt-sync")();

let a= Number(prompt("Insira o número A:"));    
let b= Number(prompt("Insira o número B:"));    
let c= Number(prompt("Insira o número C:"));    

let bq= b*b;
let da = a*2;

let delt = bq - 4* a * c;
let rdelta = delt**0.5;

if (delt < 0){

    console.log("O valor de delta é menor que 0 (Δ < 0)")

} else {

    let x1 = (- b + rdelta ) / da;
    let x2 = (- b - rdelta ) / da;


    console.log("X1 =", x1);
    console.log("X2 =", x2);
}