const prompt=require("prompt-sync") ( );
const nome= (prompt("Digite seu nome: "));
const idade= (prompt("Digite a sua idade: "));

console.log("Seu nome é: ", nome);
console.log("Você tem:", idade, "anos de idade");

if (idade > 15 && idade < 18 || idade > 70) {
console.log("Seu voto: facultativo");
} else if (idade < 15){
console.log("Seu voto: proibido");
}else{
    console.log("Seu voto: obrigatório");
}