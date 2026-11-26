/* Ultilizando a estrutura de dados switchcase, desenvolva: Um programa para uma central de atendimento, cuja as opções são:
1 - suporte técnico;
2 - financeiro;
3 - vendas;
4 - falar com atendente;
5 - sair.
Usar o javascript e o fluxograma para concluir sua tarefa. */

const prompt = require("prompt-sync")();


console.log("1 - suporte técnico");
console.log("2 - financeiro");
console.log("3 - vendas");
console.log("4 - falar com atendente");
console.log("5 - sair");

let escolha = Number(prompt("Escolha uma opção:"));


switch (escolha){

    case 1:
        console.log("Encaminhando para o suporte técnico.");

        break;

    case 2:
        console.log("encaminhando para o financeiro");
        
        break;
    case 3: 
       console.log("encaminhando para vendas");
       
       break;
     case 4:
        console.log("encaminhando para o atendente");
        
        break;
    default:
        console.log("desligando");
}