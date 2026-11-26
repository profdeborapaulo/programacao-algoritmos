const prompt = require('prompt-sync')();
 
//delta
let A = Number(prompt("Insira um valor para A: "))
let B = Number(prompt("Insira um valor para B: "))
let C = Number(prompt("Insira um valor para C: "))
let Delta = B ** 2 - 4 * A * C
 
//Bhaskara
 
let resultado1 = (-B + (Delta**0.5))/2*A
let resultado2 = (-B - (Delta**0.5))/2*A
 
console.log("O valor do X1 é: ", + resultado1)
console.log("O valor do x2 é: " + resultado2)