console.log(
    "-----------------Lanchonete BIGFOME--------------",
    "1", "Hambúrguer",  "R$36,99",
    "2",  "Cheese-Burguer", "R$35,99",
    "3",  "Cachorro-Quente", "R$18,50",
    "4",  "Sanduíche Natural","R$38,99",
    "5",  "Refrigerante","R$9,50",
    "6",  "Suco Natural","R$15,45",
    "7",  "Sobremesa", "R$25,00",
    
)

let Hamb = 36.99;
let Cheeseburger = 35.99;
let CachorroQ = 18.50;
let SandNatural = 38.99;
let Refrigerante = 9.50;
let SucoNatural = 15.45;
let Sobremesa = 25.00;

let opcao = "1";
let opcao2 = "2";
let opcao3 = "3";



const prompt = require('prompt-sync')();

const prod1 = +prompt('Qual é o código do produto?:');
const quant = prompt('Qual é a quantidade do produto desejado?:');

const prod2 = +prompt('Qual é o código do produto?:');
const quant2 = prompt('Qual é a quantidade do produto desejado?:');

const prod3 = +prompt('Qual é o código do produto?:');
const quant3 = prompt('Qual é a quantidade do produto desejado?:');




let precoHamb = quant*Hamb;
let precoCheeseburguer = quant*Cheeseburger;
let precoCachorroQ = quant*CachorroQ;
let precoSandNatural = quant*SandNatural;
let precoRefrigerante = quant*Refrigerante;
let precoSucoNatural = quant*SucoNatural;
let precoSobremesa = quant*Sobremesa;

let total = prod1 + prod2 + prod3;



switch(opcao){
    case "1":
        console.log("Você escolheu a opção hambúrguer")
        console.log("A quantidade desejada foi de", quant,"e o preço é de", precoHamb)
        break;
    case "2":
        console.log("Você escolheu a opção de Cheeseburguer")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoCheeseburguer)

         break;
     case "3":
        console.log("Você escolheu a opção de Cachorro Quente")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoCachorroQ)

         break;
      case "4":
        console.log("Você escolheu a opção de Sanduíche Natural")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoSandNatural)

         break;
       case "5":
        console.log("Você escolheu a opção de Refrigerante")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoRefrigerante)

         break;
      case "6":
        console.log("Você escolheu a opção de Suco Natural")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoSucoNatural)

         break;
       case "7":
        console.log("Você escolheu a opção de Sobremesa")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoSobremesa)

         break;

         default:
            console.log("Produto não encontrado")
            
}

switch(opcao2){
    case "1":
        console.log("Você escolheu a opção hambúrguer")
        console.log("A quantidade desejada foi de", quant,"e o preço é de", precoHamb)
        break;
    case "2":
        console.log("Você escolheu a opção de Cheeseburguer")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoCheeseburguer)

         break;
     case "3":
        console.log("Você escolheu a opção de Cachorro Quente")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoCachorroQ)

         break;
      case "4":
        console.log("Você escolheu a opção de Sanduíche Natural")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoSandNatural)

         break;
       case "5":
        console.log("Você escolheu a opção de Refrigerante")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoRefrigerante)

         break;
      case "6":
        console.log("Você escolheu a opção de Suco Natural")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoSucoNatural)

         break;
       case "7":
        console.log("Você escolheu a opção de Sobremesa")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoSobremesa)

         break;

         default:
            console.log("Produto não encontrado")
        
}

switch(opcao3){
    case "1":
        console.log("Você escolheu a opção hambúrguer")
        console.log("A quantidade desejada foi de", quant,"e o preço é de", precoHamb)
        break;
    case "2":
        console.log("Você escolheu a opção de Cheeseburguer")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoCheeseburguer)

         break;
     case "3":
        console.log("Você escolheu a opção de Cachorro Quente")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoCachorroQ)

         break;
      case "4":
        console.log("Você escolheu a opção de Sanduíche Natural")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoSandNatural)

         break;
       case "5":
        console.log("Você escolheu a opção de Refrigerante")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoRefrigerante)

         break;
      case "6":
        console.log("Você escolheu a opção de Suco Natural")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoSucoNatural)

         break;
       case "7":
        console.log("Você escolheu a opção de Sobremesa")
        console.log("A quantidade desejada foi de", quant,"e o preço é de,",precoSobremesa)

         break;

         default:
            console.log("Produto não encontrado")
}

console.log("O total do seu pedido foi de R$", total,"Agradecemos a preferência para com nosso restaurante ! :)")