const prompt=require("prompt-sync") ();
console.log("digital 1 para suporte tecnico");
console.log("digital 2 para financeiro");
console.log("digital 3 para vendas");
console.log("digital 4 para falar com o atendente");
console.log("digital 5 para sair");
const numerodigitado= (prompt("digite o número"));
switch (numerodigitado) {
    case "1":
console.log("Chamar o suporte técnico");
   break;
   case "2":
console.log("Chamar o financeiro");
   break;
   case "3":
console.log("Veremos suporte de vendas");
   break;
   case "4":
console.log("Falar com atendente");
   break;
   case "5":
console.log("A");
   break;
 default:
 console.log("Digitar um número disponível para nossos servicos")

}
