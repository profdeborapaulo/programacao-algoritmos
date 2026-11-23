const prompt=require("prompt-sync") ( );
console.log("digite 1 para suporte técnico");
console.log("digite 2 para financeiro");
console.log("digite 3 para vendas");
console.log("digite 4 para falar com o atendente");
console.log("digite 5 para sair");
const numerodigitado= (prompt("Digite o número: "));
switch (numerodigitado) {
  case "1":
console.log("Iremos chamar o suporte técnico");
    break;
  case "2":
console.log("Iremos constatar o suporte financeiro");
    break;
  case "3":
console.log("Iremos constatar o suporte de vendas");
    break;
  case "4":
console.log("Iremos chamar o atendente");
    break;
  case "5":
console.log("A");
    break;
  default:
console.log("digite um número disponível para os nossos serviços");
}