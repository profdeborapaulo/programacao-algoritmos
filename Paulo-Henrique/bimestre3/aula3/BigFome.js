
const prompt = require("prompt-sync")();

// Cardápio da BigFome
console.log("CARDÁPIO BIGFOME ");
console.log("1 - Hambúrguer (R$ 26,99)");
console.log("2 - Cheeseburger (R$ 35,99)");
console.log("3 - Cachorro-quente (R$ 18,50)");
console.log("4 - Sanduíche natural (R$ 38,99)");
console.log("5 - Refrigerante (R$ 9,50)");
console.log("6 - Suco Natural (R$ 15,45)");
console.log("7 - Finalizar pedido");


let total = 0;
let resumo = "";

// Produto 1
let codigo1 = Number(prompt("Digite o código do 1º produto (ou 7 para finalizar): "));

if (codigo1 !== 7) {
  let preco1 = 0;
  let nome1 = "";

  switch (codigo1) {
    case 1:
      nome1 = "Hambúrguer";
      preco1 = 26.99;
      break;
    case 2:
      nome1 = "Cheeseburger";
      preco1 = 35.99;
      break;
    case 3:
      nome1 = "Cachorro-quente";
      preco1 = 18.50;
      break;
    case 4:
      nome1 = "Sanduíche natural";
      preco1 = 38.99;
      break;
    case 5:
      nome1 = "Refrigerante";
      preco1 = 9.50;
      break;
    case 6:
      nome1 = "Suco Natural";
      preco1 = 15.45;
      break;
    default:
      console.log("Código inválido!");
  }

  if (preco1 > 0) {
    let qtd1 = Number(prompt("Digite a quantidade de " + nome1 + ": "));
    let subtotal1 = preco1 * qtd1;
    total = total + subtotal1;
    resumo = resumo + nome1 + " x" + qtd1 + " = R$ " + subtotal1.toFixed(2) + "\n";

    // Produto 2
    let codigo2 = Number(prompt("Digite o código do 2º produto (ou 7 para finalizar): "));

    if (codigo2 !== 7) {
      let preco2 = 0;
      let nome2 = "";

      switch (codigo2) {
        case 1:
          nome2 = "Hambúrguer";
          preco2 = 26.99;
          break;
        case 2:
          nome2 = "Cheeseburger";
          preco2 = 35.99;
          break;
        case 3:
          nome2 = "Cachorro-quente";
          preco2 = 18.50;
          break;
        case 4:
          nome2 = "Sanduíche natural";
          preco2 = 38.99;
          break;
        case 5:
          nome2 = "Refrigerante";
          preco2 = 9.50;
          break;
        case 6:
          nome2 = "Suco Natural";
          preco2 = 15.45;
          break;
        default:
          console.log("Código inválido!");
      }

      if (preco2 > 0) {
        let qtd2 = Number(prompt("Digite a quantidade de " + nome2 + ": "));
        let subtotal2 = preco2 * qtd2;
        total = total + subtotal2;
        resumo = resumo + nome2 + " x" + qtd2 + " = R$ " + subtotal2.toFixed(2) + "\n";

        // Produto 3
        let codigo3 = Number(prompt("Digite o código do 3º produto (ou 7 para finalizar): "));

        if (codigo3 !== 7) {
          let preco3 = 0;
          let nome3 = "";

          switch (codigo3) {
            case 1:
              nome3 = "Hambúrguer";
              preco3 = 26.99;
              break;
            case 2:
              nome3 = "Cheeseburger";
              preco3 = 35.99;
              break;
            case 3:
              nome3 = "Cachorro-quente";
              preco3 = 18.50;
              break;
            case 4:
              nome3 = "Sanduíche natural";
              preco3 = 38.99;
              break;
            case 5:
              nome3 = "Refrigerante";
              preco3 = 9.50;
              break;
            case 6:
              nome3 = "Suco Natural";
              preco3 = 15.45;
              break;
            default:
              console.log("Código inválido!");
          }

          if (preco3 > 0) {
            let qtd3 = Number(prompt("Digite a quantidade de " + nome3 + ": "));
            let subtotal3 = preco3 * qtd3;
            total = total + subtotal3;
            resumo = resumo + nome3 + " x" + qtd3 + " = R$ " + subtotal3.toFixed(2) + "\n";
          }
        }
      }
    }
  }
}

// Resumo final
console.log("\n=== RESUMO DO PEDIDO ===");
console.log(resumo);
console.log("VALOR TOTAL: R$ " + total.toFixed(2));