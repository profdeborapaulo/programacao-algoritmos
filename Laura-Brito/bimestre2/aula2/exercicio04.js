/*
Faça um programa que realize o cálculo do desconto em um valor total da compra. O programa deverá receber o valor total da compra e a porcentagem do desconto a ser aplicado. Ao final exibir:
a) O valor total da compra;
b) O índice percentual do desconto
c) O valor do desconto
d) O valo final a ser pago pelo cliente
*/

let valtotal = 200;
let desconto = 10;
let valdesco = (valtotal / 100) * desconto;
let valfinal = valtotal - valdesco;

console.log("Valor total:", valtotal);
console.log("Desconto:", desconto, "%");
console.log("Valor do desconto:", valdesco);
console.log("Valor final:", valfinal);