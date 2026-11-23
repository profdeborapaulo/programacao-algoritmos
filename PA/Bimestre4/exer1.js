const prompt = require("prompt-sync")();

const numI = Number(prompt("Digite um número inteiro positivo: "));

let contador = numI;

while (contador >= 0) {
    console.log(contador);
    contador--;
}
// 2
