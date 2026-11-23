/*Para fixar a aprendizagem, realizar os exercícios a seguir sobre estrutura de repetição em JS:
1- Imprimir os números de 1 a 5 usando FOR
2- Imprimir os números de 1 a 5 na tela, usando o loop while
3- Imprimir os números de 1 a 5 na tela, usando o loop Do While.
4-Calcular a soma dos números de 1 a 10.
5- Imprimindo os números pares de 1 a 10 na tela.
6- Exiba os números de 10 até 1 utilizando while.
7- Exibir a tabuada do 6 usando for.
8- Desenvolva um programa que solicite números ao usuário e continue repetindo até que ele digite 0. Usar Do While
*/

/* 1
for(let num1 = 1; num1 <= 5; num1++){
    console.log(num1);
}*/
/*2
let nume1 = 1;
while(nume1 <= 5){
    console.log(nume1);
    nume1++;
}*/
/*3
let cont = 1;
do{
    console.log(cont);
    cont++;
}while(cont <= 5)*/
/*4
let soma = conta -1;
for(let conta = 1; conta <= 10; conta++){
    console.log(conta && soma)
}*/
/*5
let par = 2;
while(par <=10){
    if(par%2=== 0){
    console.log(par)
    }
    par++
}*/
/*6
let num = 10;
while(num >= 1){
    console.log(num)
    num--
}*/
/*7
for(let tabuada = 6; tabuada <=10;tabuada++){
    for(let mult = 10; mult >= 0; mult--){
        console.log(tabuada*mult)
    }
}*/
// 8


const prompt = require('prompt-sync')();
let valor = Number(prompt("Digite um valor"));

if (valor === 0) {
    console.log("O número selecionado foi 0");
} else {
    do {
        console.log(valor);
        valor++;
    } while (valor <= 10);
}
