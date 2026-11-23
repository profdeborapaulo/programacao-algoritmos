// 2- Desenvolver um programa em Java Script e fluxograma  que calcule a formula de bhaskara 

const prompt= require("prompt-sync")();

let valA= Number (prompt ("Insira o valor A:")) ; 
let valB= Number (prompt ("Insira o valor B:")) ; 
let valC= Number (prompt ("Insira o valor C:")) ; 
let delta = valB*valB - 4*valA*valC; 
let x1;
let x2;

if ( valA = 0) {
  console.log ("Adicione um número maior ou menor que 0 para A!");
} 
else {
console.log ("O resultado de delta é:", delta ); 
 if (delta < 0 ) {

     "Sua equação não possui raízes!"

 } else {
    x1= (- valB + delta ** 0.5) / 2 * valA;
    x2= (- valB - delta ** 0.5) / 2 * valA;
    console.log ("O valor de delta é:", delta);
    console.log ("Os resultados da sua conta são:", x1, x2);
    }
}
