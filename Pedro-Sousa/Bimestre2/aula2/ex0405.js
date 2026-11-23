/*Desenvolver um programa em JavaScript que receba dois valores para as variáveis: num1 e num2. O objetivo do programa é realizar a troca dos valores, manipulando os dados das variáveis. Obrigatoriamente, você deverá criar uma terceira variável para realizar esta troca. Exibir o valores iniciais para as variáveis num1 e num2, e ao final os valores trocados. Fazer em JavaScript e no Draw.io o fluxograma. */
let num1 = 7;
let num2 = 6;

console.log("Antes:", num1, num2);

[num1, num2] = [num2, num1]; 

console.log("Depois:", num1, num2);