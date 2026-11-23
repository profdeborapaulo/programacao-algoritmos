/* Desenvolva um programa que receba a idade de uma pessoa. Deverá exibir na tela que a pessoa é maior de idade apenas de a idade informada é maior ou igual a 18 anos. */

//Decisão Composta
let idade = 15;

//Se a idade for igual ou maior a 18 anos, exibirá na tela sua idade e mostrará que ele é maior de idade. Se não, exibirá na tela sua idade e mostrará que ele é menor de idade.

if (idade >= 18){
    console.log("Você tem", idade, "anos e é maior de idade.");
} else {
    console.log("Você tem", idade, "anos e é menor de idade.");
}