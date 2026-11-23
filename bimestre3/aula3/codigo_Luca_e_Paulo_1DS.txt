const prompt= require("prompt-sync") ();

let codigoProd;
let quantidade;
let produto1 = "";
let produto2 = "";
let produto3 = "";
let quantPed1;
let quantPed2;
let quantPed3;
let subtotal1 = 0;
let subtotal2 = 0;
let subtotal3 = 0;
let total;

console.log("Olá, Seja Bem-Vindo ao Lanchonete Big Fome!");
console.log(" ");
console.log("Cardápio:")
console.log("1 - Hambúrguer - R$26,99");
console.log("2 - Cheeseburger - R$35,99");
console.log("3 - Cachorro-quente - R$18,50");
console.log("4 - Sanduíche natural - R$38,99");
console.log("5 - Refrigerante - R$9,50");
console.log("6 - Suco Natural - R$15,45");
console.log("10 - Sobremesa - R$ 25,00");

console.log(" ");

// primeiro pedido
codigoProd = Number(prompt("Digite o código do produto ou 7 para finalizar: "));

switch (codigoProd) {
    case 1:
        produto1 = "Hambúrguer";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed1 = quantidade;
        subtotal1 = quantidade * 26.99;
        break;

    case 2:
        produto1 = "Cheeseburger";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed1 = quantidade;
        subtotal1 = quantidade * 35.99;
        break;

    case 3:
        produto1 = "Cachorro-quente";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed1 = quantidade;
        subtotal1 = quantidade * 18.50;
        break;
    
    case 4:
        produto1 = "Sanduíche natural";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed1 = quantidade;
        subtotal1 = quantidade * 38.99;
        break;

    case 5:
        produto1 = "Refrigerante";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed1 = quantidade;
        subtotal1 = quantidade * 9.50;
        break;

    case 6:
        produto1 = "Suco Natural";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed1 = quantidade;
        subtotal1 = quantidade * 15.45;
        break;

    case 10:
        produto1 = "Sobremesa";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed1 = quantidade;
        subtotal1 = quantidade * 25.00;
        break;

    case 7:
        break;

    default:
    console.log("Código Inválido! Tente novamente.")
        break;
};

console.log(" ");

//segundo pedido
if (codigoProd != 7) {

    console.log("Deseja escolher outro produto?");
    codigoProd = Number(prompt("Digite outro código ou 7 para finalizar: "));

    switch (codigoProd) {
    case 1:
        produto2 = "Hambúrguer";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed2 = quantidade;
        subtotal2 = quantidade * 26.99;
        break;

    case 2:
        produto2 = "Cheeseburger";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed2 = quantidade;
        subtotal2 = quantidade * 35.99;
        break;

    case 3:
        produto2 = "Cachorro-quente";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed2 = quantidade;
        subtotal2 = quantidade * 18.50;
        break;
    
    case 4:
        produto2 = "Sanduíche natural";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed2 = quantidade;
        subtotal2 = quantidade * 38.99;
        break;

    case 5:
        produto2 = "Refrigerante";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed2 = quantidade;
        subtotal2 = quantidade * 9.50;
        break;

    case 6:
        produto2 = "Suco Natural";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed2 = quantidade;
        subtotal2 = quantidade * 15.45;
        break;

    case 10:
        produto2 = "Sobremesa";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed2 = quantidade;
        subtotal2 = quantidade * 25.00;
        break;

    case 7:
        break;

    default:
        console.log("Código Inválido! Tente novamente.")
        break;
    };
};

console.log(" ");

//terceiro pedido

if (codigoProd != 7) {

    console.log("Deseja escolher outro produto?");
    codigoProd = Number(prompt("Digite outro código ou 7 para finalizar: "));

    switch (codigoProd) {
    case 1:
        produto3 = "Hambúrguer";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed3 = quantidade;
        subtotal3 = quantidade * 26.99;
        break;

    case 2:
        produto3 = "Cheeseburger";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed3 = quantidade;
        subtotal3 = quantidade * 35.99;
        break;

    case 3:
        produto3 = "Cachorro-quente";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed3 = quantidade;
        subtotal3 = quantidade * 18.50;
        break;
    
    case 4:
        produto3 = "Sanduíche natural";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed3 = quantidade;
        subtotal3 = quantidade * 38.99;
        break;

    case 5:
        produto3 = "Refrigerante";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed3 = quantidade;
        subtotal3 = quantidade * 9.50;
        break;

    case 6:
        produto3 = "Suco Natural";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed3 = quantidade;
        subtotal3 = quantidade * 15.45;
        break;

    case 10:
        produto3 = "Sobremesa";
        quantidade = Number(prompt("Digite a quantidade: "));
        quantPed3 = quantidade;
        subtotal3 = quantidade * 25.00;
        break;

    case 7:
        break;

    default:
        console.log("Código Inválido! Tente novamente.");
        break;
    };
};

console.log(" ");

//calculo total
total = subtotal1 + subtotal2 + subtotal3;

//resumo final
console.log("Resumo do Pedido:")

if (produto1 != "") {
    console.log(" ");
    console.log(produto1);
    console.log("Quantidade: " , quantPed1);
    console.log("Subtotal: R$ " , subtotal1);  
};

if (produto2 != "") {
    console.log(" ");
    console.log(produto2);
    console.log("Quantidade: " , quantPed2);
    console.log("Subtotal: R$ " , subtotal2);
};

if (produto3 != "") {
    console.log(" ");
    console.log(produto3);
    console.log("Quantidade: " , quantPed3);
    console.log("Subtotal: R$ " , subtotal3);
};

console.log(" ");
console.log("Total do Pedido: " , "R$" , total);
console.log(" ");
console.log("Obrigado por comprar na BigFome!");