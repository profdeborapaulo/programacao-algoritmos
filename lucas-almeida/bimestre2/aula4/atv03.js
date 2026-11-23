/*-a familia"carrara" deseja comprar um imovel.Pelas regras de financiamente,
 a prestação do fananciamente não podera exercer 30%
 do valor de renda. O programa deve receber a renda total da familia e o valor total do financiamento dividido
  pelo número de meses 
 para  pagamento. O programa deverá injformar o valor máximo permitido para a parcela 
 e se foi aprovado ou reprovado o plano.
 */


let renda = 20000;
let valorImovel =150000;
let meses =32;
let parcela = valorImovel / meses;
let limite = renda * 0.30;

console.log("Valor da parcela: R$ ",parcela);
console.log("Valor máximo permitido (30% da renda): R$ ",limite);

if (parcela <= limite) {
    console.log("Financiamento APROVADO!");
} else {
    console.log("Financiamento REPROVADO.");
}
