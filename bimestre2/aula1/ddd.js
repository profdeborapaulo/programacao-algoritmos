/*Desenvolver um programa em JavaScript que receba dois valores para as variáveis: num1 e num2. O objetivo do programa é realizar 
a troca dos valores, manipulando os dados das variáveis. Obrigatoriamente, você deverá criar uma terceira variável para
 realizar esta troca. Exibir o valores iniciais para as variáveis num1 e num2, e ao final os valores trocados. Fazer em 
 JavaScript e no Draw.io o fluxograma.
*/

let num1 = 15;
let num2 = 30;

console.log("--- Valores Iniciais ---");
console.log("num1 = " + num1);
console.log("num2 = " + num2);

let aux;

aux = num1;   
num1 = num2;  
num2 = aux;   

console.log("Valores Após a Troca");
console.log("num1 = " + num1);
console.log("num2 = " + num2);







