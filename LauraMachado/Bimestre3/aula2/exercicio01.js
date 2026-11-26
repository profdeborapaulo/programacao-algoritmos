const prompt=require("prompt-sync") ( );

const digito = prompt("Por favor, digite um número. 1 é para suporte, 2 é para financeiro, 3 é para vendas, 4 é para falar com um atendente e 5 é para sair da linha: ");
let digitoD;

switch (digito) {
    case "1":
        digitoD = "Você digitou 1: Suporte técnico";
        break;
    
    case "2":
        digitoD = "Você digitou 2: Setor financeiro";
        break;

    case "3":
        digitoD = "Você digitou 3: Setor de vendas";
        break;

    case "4":
        digitoD = "Você digitou 4: Falar com um atendente";
        break;

    case "5":
        digitoD = "Você digitou 5: Sair da linha";
        break;
    
    default:
        digitoD = "Opção inválida";
}

console.log(digitoD);