const prompt = require('prompt-sync') ();

let Nome = prompt("Digite o nome do interrogado: ")
let QtdSim = 0;
console.log("===================TESTE DO POLIGRAFO=====================")
console.log("=============Responda as perguntas apenas com Sim/Não===============");
let pergunta1 = prompt("Você conhece a vítima ou algum parente dela? ");
let pergunta2 = prompt("Você sabe em qual horário ocorreu o acidente? ");
let pergunta3 = prompt("Você estava acordado(a) no horário do acidente? ");
let pergunta4 = prompt("Você tem ideia de alguém que possa ser suspeito? ");
let pergunta5 = prompt("A vítima tinha alguma dívida com você? ");
let pergunta6 = prompt("A vítima conhecia algum parente seu? ");
let pergunta7 = prompt("Você soube da notícia da morte no mesmo dia do ocorrido? ");
let pergunta8 = prompt("Alguém lhe contou algo sobre a vítima antes do ocorrido? ");
let pergunta9 = prompt("Se a vítima estivesse viva hoje, ela teria algum ranço de você? ");
let pergunta10 = prompt("A vítima era uma pessoa desempregada? ");

if (pergunta1 == "Sim") {
    QtdSim ++;
}
if (pergunta2 == "Sim") {
    QtdSim ++;
}
if (pergunta3 == "Sim") {
    QtdSim ++;
}
if (pergunta4 == "Sim") {
    QtdSim ++;
}
if (pergunta5 == "Sim") {
    QtdSim ++;
}