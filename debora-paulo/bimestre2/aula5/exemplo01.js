/*
Através do encadeamento de if, desenvolva um programa para avaliar pela media de um aluno se ele está aprovado, reprovado ou de recuperação.
Regras:
media menor ou igual a 5: reprovado
media maior do que 5 e menor do que 6: recuperação
media maior ou igual a 6: aprovado
*/
let media= 5.9;

if (media <= 5) {
    console.log("Aluno reprovado com a media: ", media);
} else if (media > 5 && media < 6){
    console.log("Aluno de recuperação com a media: ", media);
}else {
    console.log("Aprovado com a media: ", media);
}