/*
1- Imprimir os números de 1 a 5 usando FOR
2- Imprimir os números de 1 a 5 na tela, usando o loop while
3- Imprimir os números de 1 a 5 na tela, usando o loop Do While.
4-Calcular a soma dos números de 1 a 10.
5- Imprimindo os números pares de 1 a 10 na tela.
6- Exiba os números de 10 até 1 utilizando while.
7- Exibir a tabuada do 6 usando for.
8- Desenvolva um programa que solicite números ao usuário e continue repetindo até que ele digite 0. Usar Do While
*/

//1- Imprimir os números de 1 a 5 usando FOR
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//2- Imprimir os números de 1 a 5 na tela, usando o loop while
let num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}
//3- Imprimir os números de 1 a 5 na tela, usando o loop Do While.
let num2 = 1;
do {
    console.log(num2);
    num2++;
} while (num2 <= 5);
//4-Calcular a soma dos números de 1 a 10.
let soma = 0;
for (let i = 1; i <= 10; i++) {
    soma += i;
}
console.log("Soma dos números de 1 a 10:", soma);
//5- Imprimindo os números pares de 1 a 10 na tela.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//6- Exiba os números de 10 até 1 utilizando while.
let num3 = 10;  
while (num3 >= 1) {
    console.log(num3);
    num3--;
}
//7- Exibir a tabuada do 6 usando for.
for (let i = 1; i <= 10; i++) {
    console.log(`6 x ${i} = ${6 * i}`);
}
// 8- Desenvolva um programa que solicite números ao usuário e continue repetindo até que ele digite 0. Usar Do While
const prompt = require('prompt-sync')();
let numero;
do {
    numero = parseInt(prompt("Digite um número (0 para sair): "));
    console.log(`Você digitou: ${numero}`);
} while (numero !== 0); 
//\