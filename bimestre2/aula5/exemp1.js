/*
Através do encadeamento de if, desenvolva um programa para avaliar pela média de um aluno se ele está aprovado, reprovado ou de recuperação.
Regras:
média menor ou igual a 5: Reprovado.
Média maior do que 5 e menor do que 6: Recuperação.
Média maior ou igual a 6: Aprovado.
*/

let media = 5;

if (media <= 5) {
    console.log("Aluno reprovado com a média: ", media);
} else if(media > 5 && media < 6) {
    console.log("Aluno de recuperação com a media: ", media);
} else {
    console.log("Aluno aprovado com media:", media);
}