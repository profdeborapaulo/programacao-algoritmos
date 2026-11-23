/* desenvolver um programa em java script e fluxo grama que calcule a formula do bhaskara */
const prompt=require("prompt-sync") ( );
const a=Number(prompt("Digite o valor de A: "));
const b=Number(prompt("Digite o valor de B: "));
const c=Number(prompt("Digite a valor de C: "));

let delta = b ** 2 - 4 * a *c;

if(delta < 0){
console.log("Não existe raizes para esse valor de delta!")
}
else{
delta ** 0.5;   
x1 = (-b + delta) / (2*a);
x2 = (-b - delta) / (2*a);
console.log(x1);
}