import promptSync from 'prompt-sync';
const prompt = promptSync(); 

let num = prompt("Digite um número: ")

if (num %2===0) {
    console.log("Seu número é par.")
}else {
    console.log("Seu número é ímpar.")
}