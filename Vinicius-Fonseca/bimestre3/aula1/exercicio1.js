// Desenvolver um programa que receba o nome e a idade de um cidadão em anos. em seguida, o programa ira avaliar e responder se a idade digitada é valida, se for valida, se o voto é obrigatório ou facultativo. Ao final exibir as informações Java Script e Fluxograma

const prompt=require("prompt-sync") ( );


const nome= (prompt("Digite o seu nome: "));
const idade= Number(prompt("Digite a sua idade: "));

if (idade >= 18) {
    console.log("Idade digitada é valida, seu voto é obrigatório.")
} else if (idade >= 16 && idade <= 17 && idade >= 70){
    console.log("Seu voto é facultativo.")
} else{
    console.log("Seu voto não é obrigatório")
}


 
 