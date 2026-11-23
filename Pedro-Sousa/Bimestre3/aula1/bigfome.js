const prompt = require("prompt-sync")();

let cod_hambu = 26.99;
let cod_chess = 35.99;
let cod_cchr = 18.50;
let cod_sandu = 38.99;
let cod_refri = 9.50;
let cod_suco = 15.45;
let cod_sobrem = 25;
let prod1, prod2, prod3;
let cod_prod1, cod_prod2, cod_prod3;
let nome_prod1, nome_prod2, nome_prod3;
let qtnd1, qtnd2, qtnd3;
let qtnd_total;

console.log("Bem vindo ao restaurante BigFome");

let cardapio = prompt("Gostaria de ver o cardapio? ");

if (cardapio == "sim" || cardapio == "s") {
    console.log("=====================CARDÁPIO======================");
    console.log("1-Hambúrguer - 2-Cheeseburger - 3-Cachorro-quente");
    console.log("4-Sanduíche - 5-Refrigerante - 6-Suco - 7-Sobremesa");
    console.log("===================================================");
    prod1 = Number(prompt("Escolha o produto: "));

    switch (prod1) {
        case 1: cod_prod1 = cod_hambu; nome_prod1 = "hamburguer"; break;
        case 2: cod_prod1 = cod_chess; nome_prod1 = "cheeseburger"; break;
        case 3: cod_prod1 = cod_cchr; nome_prod1 = "cachorro quente"; break;
        case 4: cod_prod1 = cod_sandu; nome_prod1 = "sanduiche"; break;
        case 5: cod_prod1 = cod_refri; nome_prod1 = "refrigerante"; break;
        case 6: cod_prod1 = cod_suco; nome_prod1 = "suco"; break;
        case 7: cod_prod1 = cod_sobrem; nome_prod1 = "sobremesa"; break;
        default: console.log ("opção invalida")
    }

    qtnd1 = Number(prompt("Quantidade: "));
    qtnd_total = qtnd1 * cod_prod1;

    let choose1 = prompt("Deseja continuar? ");

    if (choose1 == "s" || choose1 == "sim") {

        prod2 = Number(prompt("Escolha outro produto: "));

        if (prod2 != prod1 && prod2 >= 1 && prod2 <= 7) {

            switch (prod2) {
                case 1: cod_prod2 = cod_hambu; nome_prod2 = "hamburguer"; break;
                case 2: cod_prod2 = cod_chess; nome_prod2 = "cheeseburger"; break;
                case 3: cod_prod2 = cod_cchr; nome_prod2 = "cachorro quente"; break;
                case 4: cod_prod2 = cod_sandu; nome_prod2 = "sanduiche"; break;
                case 5: cod_prod2 = cod_refri; nome_prod2 = "refrigerante"; break;
                case 6: cod_prod2 = cod_suco; nome_prod2 = "suco"; break;
                case 7: cod_prod2 = cod_sobrem; nome_prod2 = "sobremesa"; break;
                default: console.log ("opção invalida")
            }

            qtnd2 = Number(prompt("Quantidade: "));
            qtnd_total += qtnd2 * cod_prod2;

            let choose2 = prompt("Deseja continuar? ");

            if (choose2 == "s" || choose2 == "sim") {

                prod3 = Number(prompt("Escolha outro produto: "));

                if (
                    prod3 != prod1 && prod3 != prod2 && prod3 >= 1 && prod3 <= 7
                ) {
                    switch (prod3) {
                        case 1: cod_prod3 = cod_hambu; nome_prod3 = "hamburguer"; break;
                        case 2: cod_prod3 = cod_chess; nome_prod3 = "cheeseburger"; break;
                        case 3: cod_prod3 = cod_cchr; nome_prod3 = "cachorro quente"; break;
                        case 4: cod_prod3 = cod_sandu; nome_prod3 = "sanduiche"; break;
                        case 5: cod_prod3 = cod_refri; nome_prod3 = "refrigerante"; break;
                        case 6: cod_prod3 = cod_suco; nome_prod3 = "suco"; break;
                        case 7: cod_prod3 = cod_sobrem; nome_prod3 = "sobremesa"; break;
                        default: console.log ("opção invalida")
                    }

                    qtnd3 = Number(prompt("Quantidade: "));
                    qtnd_total += qtnd3 * cod_prod3;

                    console.log(
                        "Total: R$", qtnd_total.toFixed(2),nome_prod1, qtnd1,nome_prod2, qtnd2,nome_prod3, qtnd3, ",Tenha um ótimo dia!"
                    );
                }

            } else {
                console.log(
                    "Total: R$", qtnd_total.toFixed(2), nome_prod1, qtnd1, nome_prod2, qtnd2, ",Tenha um ótimo dia!"
                );
            }
        }

    } else {
        console.log(
            "Total: R$", qtnd_total.toFixed(2), nome_prod1, qtnd1, ",Tenha um ótimo dia!"
        );
    }

} else {
    console.log("Tenha um ótimo dia!)");
}