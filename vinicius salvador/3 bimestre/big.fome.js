const prompt=require("prompt-sync")();

const preço_caderno_universitario = 25.90
const preço_caneta_esfereografica = 3.50
let preço_lapis = 2
const preço_borracha = 2.50
const preço_marca_texto = 6.90
const preço_estojo_escolar = 19.90

console.log("PRODUTOS")
console.log("Caderno universitário R$ 25,90. o codigo deste produto é 1")
console.log("Caneta esferográfica R$ 3,50. o codigo deste produto é 2")
console.log("Lápis R$ 2,00. o codigo deste produto é 3")
console.log("Borracha R$ 2,50. o codigo deste produto é 4")
console.log("Marca-texto R$ 6,90. o codigo deste produto é 5")
console.log("Estojo escolar R$ 19,90. o codigo deste produto é 6")
console.log("encerrar atendimento. o codigo desta ação é 7")

const options = prompt("escolha até 3 produto utilizando seu codigo ou encerre o atendimento ") 
switch (options) {
   
    case "1":
console.log("quantos cadernos deseja? ");
let quantidade_de_cadernos = prompt("insira a quantidade de cadernos que deseja: ")
let calculo_cadernos = preço_caderno_universitario * quantidade_de_cadernos
console.log(calculo_cadernos)
break;

    case "2":
console.log("quantas canetas deseja?");
let quantidade_de_canetas = prompt("insira a quantidade de canetas que deseja: ")
let calculo_canetas = preço_caneta_esfereografica * quantidade_de_canetas
console.log(calculo_canetas)
break;

    case "3":
console.log("quantos lapis deseja?");
let quantidade_de_lapis = prompt("insira a quantidade de lapis que deseja: ")
let calculo_lapis = preço_lapis * quantidade_de_lapis
console.log(calculo_lapis)
break;

    case "4":
console.log("quantas borrachas deseja? ");
let quantidade_de_borrachas = prompt("insira a quantidade de borrachas que deseja: ")
let calculo_borrachas = preço_borracha * quantidade_de_borrachas
console.log(calculo_borrachas)
break;

    case "5":
console.log("quantos marca-textos deseja? ");
let quantidade_de_marcas_textos = prompt("insira a quantidade de marca-textos que deseja: ")
let calculo_marca_textos = preço_marca_texto * quantidade_de_marcas_textos

break;

    case "6":
console.log("quantos estojos deseja?");
let quantidade_de_estojos = prompt("insira a quantidade de estojos que deseja: ")
break;

    case "7":
console.log("voce encerrou seu pedido: ");
break;

 default:
    console.log("ahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaahaahahahahahahahahahaahahahaahahahahahaaha");
}   