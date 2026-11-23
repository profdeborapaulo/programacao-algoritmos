/* 
Sistema de Pedidos da Lanchonete BigFome

A lanchonete BigFome precisa de um programa simples para registrar os pedidos dos clientes.

Regras de negócio (regras do exercício)

Nesta primeira versão, o programa deverá permitir que o cliente escolha até 3 produtos diferentes. Para cada produto escolhido, o cliente deverá informar a quantidade desejada.

O programa deverá:

1- Mostrar o cardápio no console.
2- Solicitar o código do produto.
3- Utilizar switch Case para identificar o produto e seu preço.
4- Solicitar a quantidade desejada.
5- Calcular o subtotal do produto
6- Permitir que o cliente escolha outro produto, caso queira.
7- Permitir que o cliente escolha a opção 7 – Finalizar pedido antes de completar os 3 produtos.
8- Ao final, mostrar os produtos escolhidos, suas quantidades, os subtotais e o valor total do pedido.

Importante: Utilize apenas os conhecimentos estudados até o momento, ou seja, nesta primeira versão do sistema, estamos trabalhando apenas com os conceitos de variáveis, entrada de dados, operadores, estruturas condicionais e switch Case. Como requisito obrigatório, utilizar switch Case.

Hambúrguer - R$26,99
Cheeseburger - R$35,99
Cachorro-quente - R$18,50
Sanduíche natural - R$38,99
Refrigerante - R$9,50
Suco Natural - R$15,45
Sobremesa - R$ 25,00

IMPORTANTE:
Para este projeto, vocês deverão desenvolver uma tela estática, visual de como ficaria o sistema em uma tela. Podem usar o figma, canva ou fazer um esboço estilo wireframe.
Entregar o código em JavaScript (no formato txt aqui no teams)
Entregar o fluxograma. 
Ou seja, serão 3 arquivos de entrega para este projeto.

3 arquivos
prototipo de imagem
java script 
fluxograma

DUPLA: LUIZA NUNES E LAURA BRITO
*/
const prompt = require("prompt-sync")();
let subtotal;
let total;
let produto1;
let produto2;
let produto3;
// Como possui 7 itens, não é possível deixar a opção 7 para finalizar o pedido. Substituímos a opção de pular para 8
console.log("Bem vindo ao Big Fome! Escolha seus itens no cardápio:");
console.log("1 - Hambúrguer - R$26,99");
console.log("2 - Cheeseburger - R$35,99");
console.log("3 - Cachorro-quente - R$18,50");
console.log("4 - Sanduíche natural - R$38,99");
console.log("5 - Refrigerante - R$9,50");
console.log("6 - Suco Natural - R$15,45");
console.log("7 - Sobremesa - R$ 25,00");

let escolha1 = Number(prompt("Selecione o número correspondente do item desejado: "));

switch (escolha1){
    case 1:
        produto1 = 26.99;
        console.log("Opção selecionada: Hambúrguer");
        subtotal = produto1;
        console.log("Subtotal:", subtotal);
    break;
    case 2:
        produto1 = 35.99;
        console.log("Opção selecionada: Cheeseburger");
        subtotal = produto1;
        console.log("Subtotal:", subtotal);
    break;
    case 3:
        produto1 = 18.50;
        console.log("Opção selecionada: Cachorro-quente");
        subtotal = produto1;
        console.log("Subtotal:", subtotal);
     break;
    case 4:
        produto1 = 38.99;
        console.log("Opção selecionada: Sanduíche natural");
        subtotal = produto1;
        console.log("Subtotal:", subtotal);
         break;
    case 5:
        produto1 = 9.50;
        console.log("Opção selecionada: Refrigerante");
        subtotal = produto1;
        console.log("Subtotal:", subtotal);
         break;
    case 6:
        produto1 = 15.45;
        console.log("Opção selecionada: Suco natural");
        subtotal = produto1;
        console.log("Subtotal:", subtotal);
         break;
    case 7:
        produto1 = 25.00;
        console.log("Opção selecionada: Sobremesa");
        subtotal = produto1;
        console.log("Subtotal:", subtotal);
         break;
    default:
        console.log("Nenhuma opção selecionada.");
}

let escolha2 = Number(prompt("Gostaria de mais alguma coisa? Se sim, selecione mais um produto. Se não, pressione 8 para finalizar o pedido: "));

if (escolha2 == 8){
    produto2 = 0;
    produto3 = 0;
    subtotal = produto1 + produto2 + produto3;
    console.log("Não quis selecionar outro produto");
    console.log("Subtotal", subtotal);
} else{
    switch (escolha2){
    case 1:
        produto2 = 26.99;
        console.log("Opção selecionada: Hambúrguer");
        subtotal = produto1 + produto2;
        console.log("Subtotal:", subtotal);
    break;
    case 2:
        produto2 = 35.99;
        console.log("Opção selecionada: Cheeseburger");
        subtotal = produto1 + produto2;
        console.log("Subtotal:", subtotal);
         break;
    case 3:
        produto2 = 18.50;
        console.log("Opção selecionada: Cachorro-quente");
        subtotal = produto1 + produto2;
        console.log("Subtotal:", subtotal);
     break;
        case 4:
        produto2 = 38.99;
        console.log("Opção selecionada: Sanduíche natural");
        subtotal = produto1 + produto2;
        console.log("Subtotal:", subtotal);
        break;
    case 5:
        produto2 = 9.50;
        console.log("Opção selecionada: Refrigerante");
        subtotal = produto1 + produto2;
        console.log("Subtotal:", subtotal);
        break;
    case 6:
        produto2 = 15.45;
        console.log("Opção selecionada: Suco natural");
        subtotal = produto1 + produto2;
        console.log("Subtotal:", subtotal);
        break;
    case 7:
        produto2 = 25.00;
        console.log("Opção selecionada: Sobremesa");
        subtotal = produto1 + produto2;
        console.log("Subtotal:", subtotal);
        break;
    }
    }

    let escolha3 = Number(prompt("Gostaria de mais alguma coisa? Se sim, selecione mais um produto. Se não, pressione 8 para finalizar o pedido: "));
    
    if (escolha3 == 8){
    produto3 = 0;
    subtotal = produto1 + produto2 + produto3;
    console.log("Não quis selecionar outro produto");
    console.log("Subtotal", subtotal);
    } else{
    switch (escolha3){
    case 1:
        produto3 = 26.99;
        console.log("Opção selecionada: Hambúrguer");
        subtotal = produto1 + produto2 + produto3;
        console.log("Subtotal:", subtotal);
        break;
    case 2:
        produto3 = 35.99;
        console.log("Opção selecionada: Cheeseburger");
        subtotal = produto1 + produto2 + produto3;
        console.log("Subtotal:", subtotal);
        break;
    case 3:
        produto3 = 18.50;
        console.log("Opção selecionada: Cachorro-quente");
        subtotal = produto1 + produto2 + produto3;
        console.log("Subtotal:", subtotal);
        break;
    case 4:
        produto3 = 38.99;
        console.log("Opção selecionada: Sanduíche natural");
        subtotal = produto1 + produto2 + produto3;
        console.log("Subtotal:", subtotal);
        break;
    case 5:
        produto3 = 9.50;
        console.log("Opção selecionada: Refrigerante");
        subtotal = produto1 + produto2 + produto3;
        console.log("Subtotal:", subtotal);
        break;
    case 6:
        produto3 = 15.45;
        console.log("Opção selecionada: Suco natural");
        subtotal = produto1 + produto2 + produto3;
        console.log("Subtotal:", subtotal);
        break;
    case 7:
        produto3 = 25.00;
        console.log("Opção selecionada: Sobremesa");
        subtotal = produto1 + produto2 + produto3;
        console.log("Subtotal:", subtotal);
    }
    }
    console.log("produto 1:", produto1);
    console.log("produto 2:", produto2);
    console.log("produto 3:", produto3);
    console.log("subtotal:", subtotal);
    total = produto1 + produto2 + produto3;
    console.log("Total:", total);