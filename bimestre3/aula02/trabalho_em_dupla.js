const prompt = require('prompt-sync')();

console.log
    (`
                Cardápio
    1 - Hambúrguer..........R$26,99
    2 - Cheeseburger........R$35,99
    3 - Cachorro-quente.....R$18,50
    4 - Sanduíche natural...R$38,99
    5 - Refrigerante.........R$9,50
    6 - Suco Natural........R$15,45
    7 - Sobremesa...........R$25,00
    
`)

let cod1 = Number(prompt("Digite o código do seu produto: "));
let preco1;
let prod1;




switch (cod1) {

    case 1:
        prod1 = "Hambúrguer"
        preco1 = 26.99
        break;
    case 2:
        prod1 = "Cheeseburguer"
        preco1 = 35.99
        break;
    case 3:
        prod1 = "Cachorro-quente"
        preco1 = 18.50.toFixed(2)
        break;
    case 4:
        prod1 = "Sanduíche natural"
        preco1 = 38.99
        break;
    case 5:
        prod1 = "Refrigerante"
        preco1 = 9.50.toFixed(2)
        break;
    case 6:
        prod1 = "Suco natural"
        preco1 = 15.45
        break;
    case 7:
        prod1 = "Sobremesa"
        preco1 = 25.00.toFixed(2)
        break;
    default:
        console.log("Por favor, insira um valor válido")
}

let quant1 = prompt("Digite a quantidade desejada para o produto selecionado: ")
let subtotal1 = preco1 * quant1
let total1 = (subtotal1);

console.log("Subtotal: R$" + subtotal1.toFixed(2))


cod2 = Number(prompt("Deseja continuar pedindo? Se sim, digite o código de algum produto, se não, digite 8: "))

if (cod2 == 8) {
    console.log(" ");
    console.log("      Produtos selecionados:");
    console.log(" ");
    console.log(("       1-"), prod1, "x", quant1)
    console.log(" ");

    console.log("      Subtotal: ");
    console.log(" ");
    console.log("       ", prod1, "-", "R$", subtotal1);
    console.log(" ");
    console.log("Total: ", "R$", total1.toFixed(2))
} else {

    switch (cod2) {

        case 1:
            prod2 = "Hambúrguer"
            preco2 = 26.99
            break;
        case 2:
            prod2 = "Cheeseburguer"
            preco2 = 35.99
            break;
        case 3:
            prod2 = "Cachorro-quente"
            preco2 = 18.50.toFixed(2)
            break;
        case 4:
            prod2 = "Sanduíche natural"
            preco2 = 38.99
            break;
        case 5:
            prod2 = "Refrigerante"
            preco2 = 9.50.toFixed(2)
            break;
        case 6:
            prod2 = "Suco natural"
            preco2 = 15.45
            break;
        case 7:
            prod2 = "Sobremesa"
            preco2 = 25.00.toFixed(2)
            break;
        default:
            console.log("Por favor, insira um valor válido")

    }
    let quant2 = prompt("Digite a quantidade desejada para o produto selecionado: ")
    let subtotal2 = preco2 * quant2
    let total2 = (subtotal1 + subtotal2);

    console.log("Subtotal: R$" + subtotal2.toFixed(2))

    cod3 = Number(prompt("Deseja continuar pedindo? Se sim, digite o código de algum produto, se não, digite 8: "))

    if (cod3 == 8) {
        console.log(" ");
        console.log("      Produtos selecionados:");
        console.log(" ");
        console.log(("       1-"), prod1, "R$", "x", quant1)
        console.log(("       2-"), prod2, "R$", "x", quant2)
        console.log(" ");

        console.log("      Subtotal: ");
        console.log(" ");
        console.log("       ", prod1, "-", "R$", subtotal1.toFixed(2));
        console.log("       ", prod2, "-", "R$", subtotal2.toFixed(2));
        console.log(" ");
        console.log("Total: ", "R$", total2.toFixed(2))
    } else {



        switch (cod3) {

            case 1:
                prod3 = "Hambúrguer"
                preco3 = 26.99
                break;
            case 2:
                prod3 = "Cheeseburguer"
                preco3 = 35.99
                break;
            case 3:
                prod3 = "Cachorro-quente"
                preco3 = 18.50.toFixed(2)
                break;
            case 4:
                prod3 = "Sanduíche natural"
                preco3 = 38.99
                break;
            case 5:
                prod3 = "Refrigerante"
                preco3 = 9.50.toFixed(2)
                break;
            case 6:
                prod3 = "Suco natural"
                preco3 = 15.45
                break;
            case 7:
                prod3 = "Sobremesa"
                preco3 = 25.00.toFixed(2)
                break;
            default:
                console.log("Por favor, insira um valor válido")

        }

        let quant3 = prompt("Digite a quantidade desejada para o produto selecionado: ")
        let subtotal3 = preco3 * quant3
        let total3 = (subtotal1 + subtotal2 + subtotal3);
        console.log("Subtotal: " + subtotal3.toFixed(2))

        console.log(" ");
        console.log("      Produtos selecionados:");
        console.log(" ");
        console.log(("       1-"), prod1, "x", quant1)
        console.log(("       2-"), prod2, "x", quant2)
        console.log(("       3-"), prod3, "x", quant3)
        console.log(" ");

        console.log("      Subtotal: ");
        console.log(" ");
        console.log("       ", prod1, "-", "R$", subtotal1.toFixed(2));
        console.log("       ", prod2, "-", "R$", subtotal2.toFixed(2));
        console.log("       ", prod3, "-", "R$", subtotal3.toFixed(2));
        console.log(" ");
        console.log("Total: ", "R$", total3.toFixed(2))
    }

}