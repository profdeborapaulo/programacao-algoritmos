// Desenvolver um programa em JS e Fluxograma que calcule a formula do bhaskara

const prompt=require("prompt-sync") ( );

const a= Number(prompt("Digite a da formula: "));
const b= Number(prompt("Digite b da formula: "));
const c= Number(prompt("Digite c da formula: "));

const delta = b ** 2 - 4 * a * c;
delta ** 0.5

console.log("O delta é:",delta)

if (delta > 0){
    const x = - b 
}