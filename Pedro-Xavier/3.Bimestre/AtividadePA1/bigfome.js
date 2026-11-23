const prompt=require("prompt-sync") ( );
let Hambúrguer = 1
let Cheeseburger = 2
let Cachorroquente = 3
let Sanduiche = 4
let Refrigerante = 5
let Suco = 6
let Sobremesa = 7
console.log("escolha até 3 produtos");
console.log("Hambúrguer - R$26,99(digite 1)");
console.log("Cheeseburger - R$35,99(digite 2)");
console.log("Cachorro-quente - R$18,50(digite 3)");
console.log("Sanduíche natural - R$38,99(digite 4)");
console.log("Refrigerante - R$9,50(digite 5)");
console.log("Suco Natural - R$15,45(digite 6)");
console.log("Sobremesa - R$ 25,00(digite 7)");
console.log("Se não quiser algum produto a mais digite 0.");
const produto1= (prompt("Digite o primeiro produto: "));
const produto2= (prompt("Digite o segundo produto: "));
const produto3= (prompt("Digite o terceiro produto: "));
switch (produto1) {
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