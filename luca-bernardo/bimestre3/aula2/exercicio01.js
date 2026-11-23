const prompt= require("prompt-sync") ();

let opcao

console.log("Olá, seja bem vindo a central de atendimento.");
console.log("Escolha uma das opções para prosseguir: ");

console.log("Digite 1 para falar com o Suporte Técnico.");
console.log("Digite 2 para falar com o Setor Financeiro.");
console.log("Digite 3 para falar com o Setor de Vendas.");
console.log("Digite 4 para falar com atendente.");
console.log("Digite 5 para sair.");

opcao = Number(prompt(": "));


switch (opcao) {
    case 1:
        console.log("Iremos redirecionar para o Suporte Técnico.");
        console.log("Por favor, aguarde na linha.");
        break;

    case 2:
        console.log("Iremos redirecionar para o Setor Financeiro.");
        console.log("Por favor, aguarde na linha.");
        break;

    case 3:
        console.log("Iremos redirecionar para o Setor de Vendas.");
        console.log("Por favor, aguarde na linha.");
        break;

    case 4:
        console.log("Iremos redirecionar para falar com atendente.");
        console.log("Por favor, aguarde na linha.");
        break;

    case 5:
        console.log("Você escolheu sair, obrigado por entrar em contato conosco.");
        break;

    default:
        console.log("Não entendi a opção selecionada. Agradecemos pelo contato.");
};