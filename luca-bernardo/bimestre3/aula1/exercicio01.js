const prompt= require("prompt-sync") ();

let nome;
let idade;

console.log("Olá!");
console.log("Insira os dados requeridos para validação.");
nome = prompt("Digite o seu nome: ");
idade = prompt("Digite sua idade: ");

console.log("Informações computadas " , nome);

if (idade >= 18 && idade < 70) {
    console.log("Seu voto é obrigatório.");

} else if (idade >= 16 && idade <= 17 || idade >= 70) {
    console.log("Seu voto é facultativo.");

} else if (idade <= 15) {
    console.log("Você ainda não atingiu a idade mínima para votar.");
};