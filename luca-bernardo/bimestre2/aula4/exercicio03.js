let totRenda = 15.000;
let totFinan = 450.000;
let mesesPag = 30;
let prestacao = totFinan / mesesPag;
let valMaxParc = totRenda * 0.3;


if (prestacao <= valMaxParc) {
    console.log("O financiamento foi aprovado!");
    console.log("O valor da prestação será de R$" , prestacao , "tendo seu valor máximo de" , valMaxParc);

} else {
   console.log("O financiamento foi reprovado!");
    console.log("O valor atual da prestação é de R$" , prestacao , " tendo o máximo permitido de R$" , valMaxParc);

}