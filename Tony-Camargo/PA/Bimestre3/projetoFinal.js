const prompt=require("prompt-sync")();

let quantConv = Number(prompt("Digite o numero de convidados: "));
let carne = 300;
let quantCarne = (6/100)*300;
let bebida = 3 + 9;
let doce = 1;
let totalCarne = quantConv * quantCarne;
let totalBebida = quantConv * bebida;
let totalDoces = quantConv * doce;


if(quantConv < 50){
    console.log("Número insulficiente de convidados para contratar o buffet.")
}


else{
    console.log("Número suficiente de convidados para contratar o buffet.")



{
if(quantConv*quantCarne && quantConv*bebida && quantConv * doce)(
    console.log("A quantidade em quilogramas(Kg) de carne é igual a", totalCarne,"kg"))
    console.log("A quantidade de bebidas disponíveis no buffet é igual a", totalBebida,"latas");
    console.log("A quantidade de doces disponíveis no buffet é igual a", totalDoces);
if(quantConv <= 100)(
    console.log("Evento pequeno")
);
else if(quantConv> 100 && quantConv <= 200)(
    console.log("Evento médio")
);
else{
    console.log("Evento grande")
};
};}
//projetoFinal.js//