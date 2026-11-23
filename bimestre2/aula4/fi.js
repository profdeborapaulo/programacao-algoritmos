/*
Família Carrara deseja comprar um imóvel. Pelas regras de financiamento,
não poderá exceder 30% do valor da renda.
O programa recebe a renda total da família e o valor total do financiamento dividido pelo número de meses.
Deve informar o valor máximo permitido para a parcela e se o plano foi aprovado ou reprovado.
*/

let rendaTotal = 8000; // Altere este valor para a renda total da família
let valorFinanciamento = 220000; // Altere este valor para o valor total do financiamento
let numeroDeMeses = 360; // Altere este valor para o número de meses do pagamento

let parcela = valorFinanciamento / numeroDeMeses;
let parcelaMaxima = rendaTotal * 0.3;

console.log("Renda total da família:", rendaTotal);
console.log("Valor do financiamento:", valorFinanciamento);
console.log("Número de meses:", numeroDeMeses);
console.log("Parcela mensal:", parcela.toFixed(2));
console.log("Parcela máxima permitida (30% da renda):", parcelaMaxima.toFixed(2));

if (parcela <= parcelaMaxima) {
	console.log("Resultado: Financiamento aprovado.");
} else {
	console.log("Resultado: Financiamento reprovado.");
}
