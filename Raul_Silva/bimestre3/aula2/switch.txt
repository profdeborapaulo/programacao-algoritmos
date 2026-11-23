const prompt=require("Prompt-sync") ();
const digito = number(prompt("digite o número:"));
let digito0;

switch (digito) {
    case 1:
        digito0= "Você digitou 1: Suporte Técnico"
        break;
    case 2:
        digito0= "Você digitou 2: Financeiro"
        break;
    case 3:
        digito0= "Você digitou 3: Vendas"
        break;
    case 4:
        digito0="Você digitou 4: Falar com atendente"
        break;
    case 5:
        digito0="Você digitou 5: Sair"
    default:
        digito0 = "Inválido";
}
console.log(digito0);