/*
Através do encadeamento de if, desenvolva um programa para avaliar pela media de um aluno se ele está 
aprovado, reprovado ou de recuperação
Regras:
média menor ou igual a 5: reprovado.
média maior do que 5 e menor do que 6: recuperação.
média maior ou igual a  6: aprovado
*/

let media = 5;

if (media <= 5) {

    console.log("Aluno reprovado, com média", media)

} else if (media >= 5 && media < 6) {

    console.log("Aluno de recuperação, com média", media)

} else  {

    console.log("Aluno aprovado, com média", media)

}