/*A família "Carrara" deseja comprar um imóvel. Pelas regras de financiamento, a prestação do financiamento não 
poderá exceder a 30% do valor da renda. O programa deve receber a renda total da família e o valor total do financiamento 
dividido pelo número de meses para pagamento. O programa deverá informar o valor máximo permitido para a parcela e se foi 
aprovado ou reprovado o plano.*/

let valporc = 30;
let porcent = valporc / 100;
let financ =  450.000;
let renda = 100.000;
let meses = 12;

if   (financ / meses > renda * porcent) {

    console.log("O valor foi reprovado pelo plano");

} else  {

    console.log("O valor foi aprovado pelo plano");

}