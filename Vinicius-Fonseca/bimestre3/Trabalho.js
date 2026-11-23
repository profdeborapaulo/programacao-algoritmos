const prompt = require("prompt-sync")();

let produto1 = "";
let quantidade1 = 0;
let subtotal1 = 0;

let produto2 = "";
let quantidade2 = 0;
let subtotal2 = 0;

let produto3 = "";
let quantidade3 = 0;
let subtotal3 = 0;

let totalPedido = 0;
let quantidadeProdutosEscolhidos = 0;

console.log("========================================");
console.log("       BEM-VINDO À LANCHONETE BIGFOME");
console.log("========================================");
console.log(" ");
console.log("--------- CARDÁPIO ---------");
console.log("1 - Hambúrguer........ R$26,99");
console.log("2 - Cheeseburger...... R$35,99");
console.log("3 - Cachorro-quente... R$18,50");
console.log("4 - Sanduíche natural. R$38,99");
console.log("5 - Refrigerante...... R$9,50");
console.log("6 - Suco Natural...... R$15,45");
console.log("7 - Sobremesa......... R$25,00");
console.log("-----------------------------");


console.log(" ");
console.log("Escolha o produto 1:");

let codigoProduto1 = +prompt("Digite o código do produto: ");
let precoProduto1 = 0;

switch (codigoProduto1) {
    case 1:
        produto1 = "Hambúrguer";
        precoProduto1 = 26.99;
        break;
    case 2:
        produto1 = "Cheeseburger";
        precoProduto1 = 35.99;
        break;
    case 3:
        produto1 = "Cachorro-quente";
        precoProduto1 = 18.50;
        break;
    case 4:
        produto1 = "Sanduíche natural";
        precoProduto1 = 38.99;
        break;
    case 5:
        produto1 = "Refrigerante";
        precoProduto1 = 9.50;
        break;
    case 6:
        produto1 = "Suco Natural";
        precoProduto1 = 15.45;
        break;
    case 7:
        produto1 = "Sobremesa";
        precoProduto1 = 25.00;
        break;
    default:
        produto1 = "Produto inválido";
        precoProduto1 = 0;
        break;
}

quantidade1 = +prompt("Digite a quantidade desejada: ");
subtotal1 = precoProduto1 * quantidade1;
totalPedido = totalPedido + subtotal1;
quantidadeProdutosEscolhidos = quantidadeProdutosEscolhidos + 1;

console.log("Subtotal de " + produto1 + ": R$" + subtotal1);


console.log(" ");
let resposta1 = prompt("Deseja escolher mais um produto? (S/N): ");
let quermais1 = false;

switch (resposta1) {
    case "S":
    case "s":
        quermais1 = true;
        break;
    default:
        quermais1 = false;
        break;
}

if (quermais1 === true) {

    
    console.log(" ");
    console.log("Escolha o produto 2:");

    let codigoProduto2 = +prompt("Digite o código do produto: ");
    let precoProduto2 = 0;

    switch (codigoProduto2) {
        case 1:
            produto2 = "Hambúrguer";
            precoProduto2 = 26.99;
            break;
        case 2:
            produto2 = "Cheeseburger";
            precoProduto2 = 35.99;
            break;
        case 3:
            produto2 = "Cachorro-quente";
            precoProduto2 = 18.50;
            break;
        case 4:
            produto2 = "Sanduíche natural";
            precoProduto2 = 38.99;
            break;
        case 5:
            produto2 = "Refrigerante";
            precoProduto2 = 9.50;
            break;
        case 6:
            produto2 = "Suco Natural";
            precoProduto2 = 15.45;
            break;
        case 7:
            produto2 = "Sobremesa";
            precoProduto2 = 25.00;
            break;
        default:
            produto2 = "Produto inválido";
            precoProduto2 = 0;
            break;
    }

    quantidade2 = +prompt("Digite a quantidade desejada: ");
    subtotal2 = precoProduto2 * quantidade2;
    totalPedido = totalPedido + subtotal2;
    quantidadeProdutosEscolhidos = quantidadeProdutosEscolhidos + 1;

    console.log("Subtotal de " + produto2 + ": R$" + subtotal2);

    
    console.log(" ");
    let resposta2 = prompt("Deseja escolher mais um produto? (S/N): ");
    let quermais2 = false;

    switch (resposta2) {
        case "S":
        case "s":
            quermais2 = true;
            break;
        default:
            quermais2 = false;
            break;
    }

    if (quermais2 === true) {

        console.log(" ");
        console.log("Escolha o produto 3:");

        let codigoProduto3 = +prompt("Digite o código do produto: ");
        let precoProduto3 = 0;

        switch (codigoProduto3) {
            case 1:
                produto3 = "Hambúrguer";
                precoProduto3 = 26.99;
                break;
            case 2:
                produto3 = "Cheeseburger";
                precoProduto3 = 35.99;
                break;
            case 3:
                produto3 = "Cachorro-quente";
                precoProduto3 = 18.50;
                break;
            case 4:
                produto3 = "Sanduíche natural";
                precoProduto3 = 38.99;
                break;
            case 5:
                produto3 = "Refrigerante";
                precoProduto3 = 9.50;
                break;
            case 6:
                produto3 = "Suco Natural";
                precoProduto3 = 15.45;
                break;
            case 7:
                produto3 = "Sobremesa";
                precoProduto3 = 25.00;
                break;
            default:
                produto3 = "Produto inválido";
                precoProduto3 = 0;
                break;
        }

        quantidade3 = +prompt("Digite a quantidade desejada: ");
        subtotal3 = precoProduto3 * quantidade3;
        totalPedido = totalPedido + subtotal3;
        quantidadeProdutosEscolhidos = quantidadeProdutosEscolhidos + 1;

        console.log("Subtotal de " + produto3 + ": R$" + subtotal3);
    }
}

console.log(" ");
console.log("========================================");
console.log("           RESUMO DO PEDIDO");
console.log("========================================");

console.log(produto1 + " - Quantidade: " + quantidade1 + " - Subtotal: R$" + subtotal1);

if (quantidadeProdutosEscolhidos >= 2) {
    console.log(produto2 + " - Quantidade: " + quantidade2 + " - Subtotal: R$" + subtotal2);
}

if (quantidadeProdutosEscolhidos >= 3) {
    console.log(produto3 + " - Quantidade: " + quantidade3 + " - Subtotal: R$" + subtotal3);
}

console.log("----------------------------------------");
console.log("VALOR TOTAL DO PEDIDO: R$" + totalPedido);
console.log("========================================");
console.log("Obrigado pela preferência, volte sempre!");