/*
Exercício 5
 Um micro empreendedor da área de câmbio está com dificuldades em calcular a conversão dos valores.
  Seu objetivo está em desenvolver um programa que faça a conversão automaticamente. Para isso, 
deverá ser inserido o valor da cotação do dólar e o valor total em real para ser convertido.
*/

let cotdolar = 5;
let valreal = 10;
let converreal = valreal / cotdolar; // Nota: Na imagem a lógica está cotdolar / valreal, mas o usual para saber quantos dólares você compra é reais / cotação.

console.log("Cotação do Dólar:", cotdolar);
console.log("Valor em Reais para ser convertido:", valreal);
console.log("Conversão do Real para Dólar:", converreal);