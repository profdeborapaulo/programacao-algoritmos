
/*Utilizando a estrutura de dados switch case, faça:
Um programa para uma central de atendimento, cujas opções são: Um programa para uma central de atendimento, cujas opções são:1 - Suporte Técnico,
2 - Financeiro,
3 - Vendas
4 - Falar com Atendente
5 - Sair 
*/
let opcao = prompt("Digite um numero de 1 a 5:");

switch (opcao) {
  case "1":
    alert("Suporte Tecnico");
    break;
  case "2":
    alert("Financeiro");
    break;
  case "3":
    alert("Vendas");
    break;
  case "4":
    alert("Falar com Atendente");
    break;
  case "5":
    alert("Sair");
    break;
  default:
    alert("Opcao invalida");
    break;
}