
/*Desenvolva um programa que realize o cálculo do desconto em um valor total de compra. O programa deverá receber o valor total da compra e a porcentagem do desconto a ser aplicada. Ao final, exibir:
- O Valor total da compra
- O Índice percentual do desconto
- O Valor do desconto
- O Valor final a ser pago pelo cliente*/

let valcompra = 1719.99;
let desconto = 20;



let valdesconto = valcompra*desconto/100 ;
let totalcomdesconto = valcompra-valdesconto  ;


console.log("O valor da sua compra é de", valcompra, "reais.")
console.log("O percentual do desconto é de", desconto, "%.") 
console.log("O valor do desconto é de:", valdesconto, "reais.");
console.log("O valor total, com o desconto é de:", totalcomdesconto, "reais.");
