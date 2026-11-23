// 3- A familia "Carrara" deseja comprar um imóvel. Pelas regras de financiamento, a prestação do financiamento não poderá exceder a 30% do valor da renda. O programa deve receber a renda total da família e o valor total do financiamento dividido pelo número de meses para pagamento.  O programa deverá informar o valor máximo permitido para a parcela e se foi aprovado ou reprovado o plano.


let rendaFamilia = 5000;
let valorImovel = 200000;
let meses = 240;

let parcela = valorImovel / meses;

let limite = rendaFamilia * 0.30;

console.log("Valor da parcela: R$ " + parcela);
console.log("Valor máximo permitido: R$ " + limite);

if (parcela <= limite) {
    console.log("Financiamento APROVADO!");
} else {
    console.log("Financiamento REPROVADO!");
}