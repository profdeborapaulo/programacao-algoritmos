/* 1 - Utilizando a estrutura de dados Switch Case, desenvolva primeiro um programa para uma central de atendimento, cuja opções são: 
	1-Suporte técnico
	2-Financeiro
	3-Vendas
	4-Falar com atendente
	5-Sair

Faça em JS e em fluxograma para concluir sua tarefa
*/
const prompt = require("prompt-sync")();
let escolha = Number(prompt("Bem vindo a Central de Atendimento. Digite 1 para suporte técnico, 2 para Parte Financeira, 3 para Vendas, 4 para falar com o atendente e 5 para sair:"));

switch (escolha){
    case 1:
        console.log("Você escolheu a opção 1: Suporte Técnico");
        break;
    case 2:
        console.log("Você escolheu a opção 2: Parte Financeira");
        break;
    case 3:
        console.log("Você escolheu a opção 3: Parte de Vendas");
        break;
    case 4:
        console.log("Você escolheu a opção 4: Falar com o atendente");
        break;
    case 5:
        console.log("Você escolheu a opção 5: Sair");
        break;
    default:
    console.log("Nenhuma opção foi selecionada. Por favor, escolha uma opção válida");
    break;
};