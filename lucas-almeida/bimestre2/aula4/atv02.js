/* 2-uma das empresas nescessita de um programa que calcule aquantidade de horas extras ,
semanais de um funcionario.
Sabendo que a carga semanal
 é de 44horas,o programa devera exibir um alertae se a quantidade de horas exceder
  este limite e mostrar o total de horas excedido,
 caso contrario,exibir a mensagem que não houve horas extras pelo
 funcionario
 */
let horas= 23
if(horas>44){
    console.log("voçê ultrapssou o a carga semanal de horas,voçê está com:",horas,"horas de trabalho")
}
else{
    console.log("voçê não ultrapssou a carga horaria de 44 horas,voçê está com:",horas,"horas");
}
