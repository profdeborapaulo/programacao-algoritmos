const prompt = require("prompt-sync")();

console.log("--------- LANCHONETE BIGFOME ---------");
console.log("1 - Hambúrguer       R$ 36,99");
console.log("2 - Cheese-Burguer   R$ 35,99");
console.log("3 - Cachorro-Quente  R$ 18,50");
console.log("4 - Sanduíche Natural R$ 38,99");
console.log("5 - Refrigerante     R$ 9,50");
console.log("6 - Suco Natural     R$ 15,45");
console.log("7 - Sobremesa        R$ 25,00");
console.log("---------------------------------------");

let total = 0;

// Primeiro produto
let opcao = Number(prompt("Digite o código do produto: "));
let quantidade = Number(prompt("Digite a quantidade: "));

if (opcao == 1) {
    total += 36.99 * quantidade;
} else if (opcao == 2) {
    total += 35.99 * quantidade;
} else if (opcao == 3) {
    total += 18.50 * quantidade;
} else if (opcao == 4) {
    total += 38.99 * quantidade;
} else if (opcao == 5) {
    total += 9.50 * quantidade;
} else if (opcao == 6) {
    total += 15.45 * quantidade;
} else if (opcao == 7) {
    total += 25.00 * quantidade;
} else {
    console.log("Produto inválido!");
}


let continuar = prompt("Deseja adicionar outro produto? (sim/não): ");

if (continuar == "sim") {

    opcao = Number(prompt("Digite o código do produto: "));
    quantidade = Number(prompt("Digite a quantidade: "));

    if (opcao == 1) {
        total += 36.99 * quantidade;
    } else if (opcao == 2) {
        total += 35.99 * quantidade;
    } else if (opcao == 3) {
        total += 18.50 * quantidade;
    } else if (opcao == 4) {
        total += 38.99 * quantidade;
    } else if (opcao == 5) {
        total += 9.50 * quantidade;
    } else if (opcao == 6) {
        total += 15.45 * quantidade;
    } else if (opcao == 7) {
        total += 25.00 * quantidade;
    } else {
        console.log("Produto inválido!");
    }


    continuar = prompt("Deseja adicionar mais um produto? (sim/não): ");

    if (continuar == "sim") {

        opcao = Number(prompt("Digite o código do produto: "));
        quantidade = Number(prompt("Digite a quantidade: "));

        if (opcao == 1) {
            total += 36.99 * quantidade;
        } else if (opcao == 2) {
            total += 35.99 * quantidade;
        } else if (opcao == 3) {
            total += 18.50 * quantidade;
        } else if (opcao == 4) {
            total += 38.99 * quantidade;
        } else if (opcao == 5) {
            total += 9.50 * quantidade;
        } else if (opcao == 6) {
            total += 15.45 * quantidade;
        } else if (opcao == 7) {
            total += 25.00 * quantidade;
        } else {
            console.log("Produto inválido!");
        }
    }
}

// Finalização
console.log("O total do seu pedido foi: R$", total.toFixed(2));

let finalizar = prompt("Deseja finalizar o pedido? (sim/não): ");

if (finalizar == "sim") {
    console.log("Pedido finalizado!");
    console.log("Agradecemos a preferência! :)");
} else {
    console.log("Pedido cancelado.");
}
