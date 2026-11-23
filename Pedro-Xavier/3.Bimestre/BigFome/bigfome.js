const prompt=require("prompt-sync") ( );
let Hambúrguer = 1;
let Cheeseburger = 2;
let Cachorroquente = 3;
let Sanduiche = 4;
let Refrigerante = 5;
let Suco = 6;
let Sobremesa = 7;
let valortotal = 0;
let valor1 = 0;
let valor2 = 0;
let valor3 = 0;

console.log("Escolha até 3 produtos");
console.log("Hambúrguer - R$26,99(digite 1)");
console.log("Cheeseburger - R$35,99(digite 2)");
console.log("Cachorro-quente - R$18,50(digite 3)");
console.log("Sanduíche natural - R$38,99(digite 4)");
console.log("Refrigerante - R$9,50(digite 5)");
console.log("Suco Natural - R$15,45(digite 6)");
console.log("Sobremesa - R$ 25,00(digite 7)");
console.log("Se não quiser algum produto a mais digite 0.");
let produto1 = Number(prompt("Digite o primeiro produto: "));

switch (produto1) {
  case 1:
console.log("Hambúrguer adicionado");
valortotal = valortotal + 26.99;
produto1 = "Hambúrguer";
valor1 = 26.99;
    break;
  case 2:
console.log("Cheeseburger adicionado");
valortotal = valortotal + 35.99; 
produto1 = "Cheeseburger";
valor1 = 35.99;
    break;
  case 3:
console.log("Cachorro-quente adicionado");
valortotal = valortotal + 18.50; 
produto1 = "Cachorro-quente";
valor1 = 18.50;
    break;
  case 4:
console.log("Sanduíche natural adicionado");
valortotal = valortotal + 38.99; 
produto1 = "Sanduíche Natural";
valor1 = 38.99;
    break;
  case 5:
console.log("Refrigerante adicionado");
valortotal = valortotal + 9.50; 
produto1 = "Refrigerante";
valor1 = 9.50;
    break;
  case 6:
console.log("Suco Natural adicionado");
valortotal = valortotal + 15.45; 
produto1 = "Suco Natural";
valor1 = 15.45;
break
  case 7:
console.log("Sobremesa adicionado");
valortotal = valortotal + 25.00;
produto1 = "Sobremesa";
valor1 = 25.00;
break;
  case 0:
console.log("Nenhum produto adicionado");
produto1 = "Nada";
valor1 = 0;
break;
  default:
console.log("digite um número disponível para os nossos serviços");
}
console.log("O valor até agora está:", valortotal);

let produto2 = Number(prompt("Digite o segundo produto: "));

switch (produto2) {
  case 1:
console.log("Hambúrguer adicionado");
valortotal = valortotal + 26.99;
produto2 = "Hambúrguer";
valor2 = 26.99;
    break;
  case 2:
console.log("Cheeseburger adicionado");
valortotal = valortotal + 35.99; 
produto2 = "Cheeseburger";
valor2 = 35.99;
    break;
  case 3:
console.log("Cachorro-quente adicionado");
valortotal = valortotal + 18.50; 
produto2 = "Cachorro-quente";
valor2 = 18.50;
    break;
  case 4:
console.log("Sanduíche natural adicionado");
valortotal = valortotal + 38.99; 
produto2 = "Sanduíche Natural";
valor2 = 38.99;
    break;
  case 5:
console.log("Refrigerante adicionado");
valortotal = valortotal + 9.50; 
produto2 = "Refrigerante";
valor2 = 9.50;
    break;
  case 6:
console.log("Suco Natural adicionado");
valortotal = valortotal + 15.45; 
produto2 = "Suco Natural";
valor2 = 15.45;
break
  case 7:
console.log("Sobremesa adicionado");
valortotal = valortotal + 25.00;
produto2 = "Sobremesa";
valor2 = 25.00;
break;
  case 0:
console.log("Nenhum produto adicionado");
produto2 = "Nada";
valor2 = 0;
break;
  default:
console.log("digite um número disponível para os nossos serviços");
}
console.log("O valor até agora está:", valortotal);

let produto3 = Number(prompt("Digite o terceiro produto: "));

switch (produto3) {
  case 1:
console.log("Hambúrguer adicionado");
valortotal = valortotal + 26.99;
produto3 = "Hambúrguer";
valor3 = 26.99;
    break;
  case 2:
console.log("Cheeseburger adicionado");
valortotal = valortotal + 35.99; 
produto3 = "Cheeseburger";
valor3 = 35.99;
    break;
  case 3:
console.log("Cachorro-quente adicionado");
valortotal = valortotal + 18.50; 
produto3 = "Cachorro-quente";
valor3 = 18.50;
    break;
  case 4:
console.log("Sanduíche natural adicionado");
valortotal = valortotal + 38.99; 
produto3 = "Sanduíche Natural";
valor3 = 38.99;
    break;
  case 5:
console.log("Refrigerante adicionado");
valortotal = valortotal + 9.50; 
produto3 = "Refrigerante";
valor3 = 9.50;
    break;
  case 6:
console.log("Suco Natural adicionado");
valortotal = valortotal + 15.45; 
produto3 = "Suco Natural";
valor3 = 15.45;
break
  case 7:
console.log("Sobremesa adicionado");
valortotal = valortotal + 25.00;
produto3 = "Sobremesa";
valor3 = 25.00;
break;
  case 0:
console.log("Nenhum produto adicionado");
produto3 = "Nada";
valor3 = 0;
break;
  default:
console.log("digite um número disponível para os nossos serviços");
}

console.log("Você comprou um:", produto1, "com o preço de:", valor1);
console.log("Você comprou um:", produto2, "com o preço de:", valor2);
console.log("Você comprou um:", produto3, "com o preço de:", valor3);

console.log("O valor total de tudo é: R$", valortotal);