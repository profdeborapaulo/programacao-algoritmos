const prompt = require("prompt-sync") ();

let QtdM = parseInt(prompt("insira a quantidade de pessoas do sexo masculino: "));
let QtdF = parseInt(prompt("insira a quantidade de pessoas do sexo feminino: "));

let SomaIM = parseInt(prompt("insira a soma das idades masculinas: "));
let SomaIF = parseInt(prompt("insira a soma das idades femininas: "));

let SomaSM = parseInt(prompt("insira a soma dos salários masculinos: "));
let SomaSF = parseInt(prompt("insira a soma dos salarios femininos: "));

let totalP = QtdM + QtdF;

let Media = (SomaSM + SomaSF) / 2;

let SalMaior = "";
 if (SomaSM > SomaSF) {
     SalMaior = "Masculino";
 } else {
     SalMaior = "Feminino";
 }

 console.log("=======================RELATORIO=======================");
 console.log("Total de pessoas masculinas: ", QtdM);
 console.log("Total de pessoas Femininas: ", QtdF);
 console.log("Media dos salarios: ", Media);
 console.log("Total de pessoas: ", totalP);
 console.log("O maior valor total de salário é das pessoas do sexo: ", SalMaior);
 console.log("=======================================================");
