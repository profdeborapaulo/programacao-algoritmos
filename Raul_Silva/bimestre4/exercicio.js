// 1. Imprimir os números de 1 a 5 usando FOR
console.log("1) FOR");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. Imprimir os números de 1 a 5 usando WHILE
console.log("\n2) WHILE");
let num1 = 1;
while (num1 <= 5) {
    console.log(num1);
    num1++;
}

// 3. Imprimir os números de 1 a 5 usando DO WHILE
console.log("\n3) DO WHILE");
let num2 = 1;
do {
    console.log(num2);
    num2++;
} while (num2 <= 5);

// 4. Calcular a soma dos números de 1 a 10
console.log("\n4) Soma de 1 a 10");
let soma = 0;
for (let i = 1; i <= 10; i++) {
    soma += i;
}
console.log("Soma =", soma);

// 5. Imprimir os números pares de 1 a 10
console.log("\n5) Números pares de 1 a 10");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 6. Exibir os números de 10 até 1 utilizando WHILE
console.log("\n6) Contagem regressiva");
let contador = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}

// 7. Exibir a tabuada do 6 usando FOR
console.log("\n7) Tabuada do 6");
for (let i = 1; i <= 10; i++) {
    console.log(`6 x ${i} = ${6 * i}`);
}

// 8. Solicitar números ao usuário até que ele digite 0 (DO WHILE)
console.log("\n8) Digite números até informar 0");

let numero;

do {
    numero = Number(prompt("Digite um número (0 para sair):"));
    console.log("Você digitou:", numero);
} while (numero !== 0);

console.log("Programa encerrado.");