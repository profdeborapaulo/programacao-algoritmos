/*
desenvolver um programa que receba o nome e a idade e o nome de um cidadão. Em anos em seguida,
 o programa irá avaliar e responder de a idade digitada é valida se for valida, se o voto é obrigatório ou facultativo.
  Ao final exibir as informações
*/

const prompt=require("prompt-sync") ( );

const nome=  (prompt("Digite o seu nome: "));
const idade= Number (prompt("Digite sua idade: "));

if(idade>=70) {
    console.log(nome,":Seu voto é facultativo,de acordo com a lei");
}
else if(idade < 18){
    console.log(nome,":Seu voto é facultativo,de acordo com a lei")
}
else{
    console.log(nome,":Seu voto é obrigatorio, de acordo com a lei")
}
