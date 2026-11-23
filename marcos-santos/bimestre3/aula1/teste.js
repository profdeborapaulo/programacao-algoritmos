const prompt=require("prompt-sync")();
let nome= prompt("digite o nome do cidadão: ");
let ano_nasc=(prompt("digite o ano de nascimento: "));
let idade = 2026 - ano_nasc;
if (idade >= 16 && idade < 18) {
    console.log("o cidadão", nome, "tem o direito de voto, contudo é opcional")
}
else if (idade > 18) {
    console.log("o cidadão", nome, "tem o dever de votar" )
}

else {
    console.log("o cidadão", nome, "não tem direito de votar")
}