/* Desenvolver um programa em JavaScript que receba dois valores para as variáveis: num1 e num2. O objetivo do programa é realizar a troca dos valores, manipulando os dados das variáveis. Obrigatoriamente, você deverá criar uma terceira variável para realizar esta troca. Exibir o valores iniciais para as variáveis num1 e num2, e ao final os valores trocados. Fazer em JavaScript e no Draw.io o fluxograma.*/

//INÍCIO -----

//Declarando as variáveis.
let num1 = 2;
let num2 = 4;
let num3 = num1;


//Mostrando os valores das variáveis.
console.log("Número 1:", num1);
console.log("Número 2:", num2);


//PROCESSAMENTO -----

//Processando a troca de valores entre os números.
num1 = num2;
num2 = num3;


//Exibição dos números com os valores trocados.
console.log ("Número 1 invetido:", num1);
console.log ("Número 2 invetido:", num2);

//FIM DO ALGORITMO -----