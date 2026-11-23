let totFinan= 50;
let rendaTot= 90;
let mesesPaga= 5;
let totPres= totFinan/mesesPaga;
let parcMax= rendaTot*0.3;


if (totPres<=parcMax){
    console.log("Seu financiamento foi aprovado, o valor máximo para a parcela é:", parcMax)

}
else {
    console.log ("Seu financiamento foi reprovado, o valor máximo para a parcela é:", parcMax)
}




