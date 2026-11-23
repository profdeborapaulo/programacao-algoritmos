/* A) Um programa para uma central de atendimento cuja opções são:
	1- Suporte técnico
	2- Financeiro
	3- Vendas
	4- Falar com atendente 
	5- Sair

Usar o Java Script e o fluxograma para concluir seu programa 
*/
const prompt = require ("prompt-sync") ();
let escolha = Number (prompt ("Bem vindo a nossa central de atendimento! Digite 1 para suporte técnico, 2 para o financeiro, 3 para falar sobre vendas 4 para conversar com nosso atendente ou 5 para sair"));

switch (escolha) {
    case 1:
        console.log ("Você será redirecionado para nosso suporte técnico");
        break;
    case 2:
        console.log ("Você será redirecionado para nosso financeiro");
        break;
    case 3:
        console.log ("Você será redirecionado para nossa área de vendas");
        break;
    case 4:
        console.log ("Você será redirecionado para falar com um de nossos atendentes");
        break;
    case 5:
        console.log ("Você será redirecionado para a saída");
        break;
 default:
    console.log ("Opção inválida")
}
