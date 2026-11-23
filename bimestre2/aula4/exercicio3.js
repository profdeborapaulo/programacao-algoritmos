/* 
A família "Carrara" deseja comprar um imóvel. Pelas regras de financiamento, a prestação do financiamento não poderá exceder a 30% do valor da renda. o programa deverá receber o valor total da renda da família, o valor total do financiamento dividido pelo número de meses para pagamento. O programa deverá informar o valor máximo permitido para a parcela e se foi aprovado ou reprovado o plano.
*/
let rendafam = 10000;
let meses = 6;
let financ = 5000;
let prestac = financ / meses;
let porc = rendafam * 0.3;

console.log("Valor Máximo:", porc);

if(prestac > porc){
    console.log("Reprovado. Valor Excedido");
} else{
    console.log("Aprovado! Valor dentro do máximo");
}

