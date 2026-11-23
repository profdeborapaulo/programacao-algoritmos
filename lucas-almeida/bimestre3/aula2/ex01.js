/* 1-utilizando a estrutura de dados suit-case, desenvolva:
1°Um programa pra uma central de atendimento, cuja as opções são:
1 = suporte técnico
2 = financeiro
3 = vendas
4 = falar com a atendente
5 = sair
usar o java script e o fluxograma. 
*/

const prompt=require("prompt-sync") ( );

const opcao = prompt("digite sua opçâo: ");

switch (opcao) {
case "1":
    console.log("Voçê digitou 1, ir para: suporte técnico");
    break;
    case "2":
    console.log("Voçê digitou 1, ir para: financeiro");
    break;
    case "3":
    console.log("Voçê digitou 1, ir para: Vendas");
    break;
    case "4":
     console.log("Voçê digitou 1, ir para: falar com a atendente");
    break;
     case "5":
     console.log("Voçê digitou 1, ir para: Sair");
     break;
     default:
    console.log("Opção não encontrada");
}