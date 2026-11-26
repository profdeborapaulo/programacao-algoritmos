const prompt = require('prompt-sync')();

let convidados = Number(prompt("insira do número de convidados:"));

let consumoM = (convidados*300+convidados*300*0.06)/1000;
let consumoC = convidados;
let consumoR = convidados*3+9;
var tamanhoE;

 if (convidados <49){
    console.log("Número insuficiente de convidados para contratar o buffet.");
 }   

 else if (convidados <=100){

var tamanhoE = "Evento pequeno";

 }

  else if (convidados <=200 && convidados >100){

var tamanhoE = "Evento médio";

 }

   else {

var tamanhoE = "Evento grande";

 }

 if (convidados >49){

 console.log("o evento usará:", consumoM,"kg de carne");
 console.log(consumoC,"doces");
 console.log(consumoR, "Latas de refrigerante");
 console.log("e será um", tamanhoE);
 }
 
