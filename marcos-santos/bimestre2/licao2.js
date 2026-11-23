/* Desenvolver um programa em JavaScript que receba dois valores para as variáveis: num1 e num2.
O objetivo do programa é realizar a troca dos valores, manipulando os dados das variáveis.
Obrigatoriamente, você deverá criar uma terceira variável para realizar esta troca.
Exibir o valores iniciais para as variáveis num1 e num2, e ao final os valores trocados.
Fazer em JavaScript e no Draw.io o fluxograma.
*/

let num1 = 5;
let num2 = 10;

console.log("O primeiro valor é:", num1);
console.log("O segundo valor é:", num2);


let troca = 0;
troca = num1;
num1 = num2;
num2 = troca;

console.log("o primeiro valor agora é:", num1);
console.log("o segundo valor agora é:", num2);