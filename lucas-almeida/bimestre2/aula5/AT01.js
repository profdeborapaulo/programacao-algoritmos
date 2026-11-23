/*Usando condicional encadeada, resolva com JavaScript e Fluxograma.
 
Criar um programa que classifica a nota de um aluno em conceitos (MB, B, R, I, NA).
Se a  nota for maior ou igual a 90:  menção "MB"
Se a nota for maior ou igual a 80: menção "B"; 
Se a nota for maior ou igual a  70): menção "R";
Se a nota for maior ou  igual a 60: menção "I"
Senão atender aos critérios anteriores, menção: "NA".
*/
let nota = 85;
if(nota>=90){
    console.log("voçê está com um MB ,porque voce tirou uma nota igual á:",nota);
}
else if(nota>=80){
    console.log("voçê está com um B ,porque voce tirou uma nota igual á:",nota);
}
else if(nota>=70){
    console.log("voçê está com um R ,porque voce tirou uma nota igual á:",nota);
}
else if(nota>=60){
    console.log("voçê está com um I ,porque voce tirou uma nota igual á:",nota);
}
 else if (nota<60) {
    console.log("voçê está com um NA ,porque voce tirou uma nota igual á:",nota);
}