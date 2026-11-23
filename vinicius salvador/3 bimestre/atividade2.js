const prompt=require("prompt-sync")();

let a = prompt("insira o valor de A");
let b = prompt("insira o valor de B");
let c = prompt("insira o valor de C"); 
let da = a*2 
let delta = (b ** 2) - 4 * a * c;
let raiz = delta**0.5;
let x = (-b + raiz) / da;
console.log("o resultado de x2 é", x);
let p = (-b - raiz) / da;
console.log("o resultado de x2 é", p);

