/* 
Uma empresa necessita de um programa que calcule a quantidade de horas extras semanais de um funcionário. Sabendo que a carga semanal é de 44 horas, o programa deverá exibir um alerta se a quantidade de horas exceder este limite. Caso contrário, exibir a mensagem que não houve horas extras pelo funcionário.
*/
let hr = 44;
let extra = 0;
let total = hr + extra;

if(total > hr){
    console.log("ALERTA! Quantidade de Horas excedidas:", extra);
} else {
    console.log("Não houve horas extras!");
}