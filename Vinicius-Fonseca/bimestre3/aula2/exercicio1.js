/*utilizando a estrutura de dados swit case desenvolva, 
1° um programa para uma central de atendimento, cuja as opcoes são 
1 suporte tecnico 
2 financeiro 
3 vendas 
4 falar com atendente 
5 sair
usar JS e fluxograma*/


console.log("digite 1 para Suporte Técnico");
console.log("digite 2 para Financeiro");
console.log("digite 3 para Vendas");
console.log("digite 4 para Falar com Atendente");
console.log("digite 5 para Sair");

const prompt=require("prompt-sync") ( );
const atendimento= (prompt("digite o número que queira ser atendido: "));

switch(atendimento){
    case "1":
        console.log("Olá aqui é o Suporte Técnico");
    break;
    case "2":
        console.log("Olá aqui é o Financeiro");
    break;
    case "3":
        console.log("Olá aqui é a Vendas");
    break;
    case "4":
        console.log("Olá aqui é o Falar com atendentes");
    break;
    case "5":
        console.log("você está saindo, Tchau");
    break;
    default:
        console.log("escolha 1 número de 1 a 5. ");
}