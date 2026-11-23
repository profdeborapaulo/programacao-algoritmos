/*Uma empresa necessita de um programa que calcule a quantidade de horas extras semanais de um funcionario. Sabendo
que a carga semanal é de 44 horas, o programa deverá exibir um alerta se a quantidade de horas exceder este limite e 
mostrar o total de horas excedido. Caso contrário, exibir a mensagem que não houve horas extras pelo funcionário*/

let nome= "Jeferson";
let horastrab= 43;
let carghorsem= 44;
let horaextra= horastrab-carghorsem;

if (horastrab > carghorsem) {

    console.log("Você está com", horaextra, "horas extras semanais");

} else {

    console.log("Não houveram horas extras por sua parte", nome, ".");

}
