let valorTotal = 250;
let desconto = 15;
let porDesconto = desconto / 100
let totDesconto = valorTotal * porDesconto;
let valFinal = valorTotal - totDesconto;

console.log("O valor total da compra é" , valorTotal);
console.log("O índice percentual do desconto é de" , desconto , "%");
console.log("O valor do desconto é de" , totDesconto);
console.log("O valor final a ser pago pelo cliente é de R$" , valFinal);