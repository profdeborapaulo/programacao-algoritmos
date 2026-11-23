const prompt= require("prompt-sync") ();

let quantConvidados;
let gramasCarne;
let kgCarne;
let latasRefrigerante;
let doces;

console.log("Olá, Bem-Vindo ao Sistema do Buffet F&F – Festa Feliz");
quantConvidados = Number (prompt("Insira a quantidade de convidados para o evento: "));

if (quantConvidados < 50) {
    console.log ("Número insuficiente de convidados para contratar o buffet.");
} else {
    gramasCarne = (quantConvidados * 300) * 1.06;
    kgCarne = gramasCarne / 1000;
    latasRefrigerante = (quantConvidados * 3) + 9;
    doces = (quantConvidados * 1);

    console.log("Para o evento informado serão necessários:");
    console.log(kgCarne , "Kilogramas de Carne.");
    console.log(latasRefrigerante , "Latas de Refrigerante.");
    console.log(doces , "doces");
    
    console.log("Com base no número de convidados, o evento foi classificado como:");

    if (quantConvidados >= 50 && quantConvidados <= 100) {
        console.log("Evento Pequeno.");
    } else if (quantConvidados >= 101 && quantConvidados <= 200) {
        console.log("Evento Médio");
    } else if (quantConvidados > 200) {
        console.log("Evento Grande");
    }
    }