const prompt=require("prompt-sync")();

let nome = prompt("insira seu nome")
let idade = Number(prompt("insira sua idade"))
if (idade < 16)
    console.log("seu voto é vetado", nome)
else if (idade >  16 && idade <18)
console.log("seu voto é facultativo",nome)
else if (idade > 69)
    console.log("vota se quiser ", nome)
else
    console.log("voto obrigatorio senhor", nome)