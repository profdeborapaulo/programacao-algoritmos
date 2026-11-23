const prompt = require("prompt-sync")();

console.log("1 - Suporte técnico")
console.log("2 - Financeiro")
console.log("3 - Vendas")
console.log("4 - Falar com atendente")
console.log("5 - Sair")

let escolha = Number(prompt("Escolha uma opção: "));

switch(escolha){
         case 1:
        console.log("Te encaminhando para o seu suporte técnico...")
    break;
         case 2:
        console.log("Te encaminhando para o suporte financeiro...")
    break;
        case 3:
        console.log("Te encaminhando para vendas...")
    break;
        case 4:
        console.log("Te encaminhando para um atendente...")
    break;
        case 5:
        console.log("Saindo...")
    break;
    default:
        console.log("Por favor, insira um valor válido")

}