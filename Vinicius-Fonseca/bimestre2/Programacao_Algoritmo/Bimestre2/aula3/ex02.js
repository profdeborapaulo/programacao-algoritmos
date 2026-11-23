// 2-Uma empresa necessita de um programa que calcule a quantidade de horas extras semanais de um funcionário. Sabendo que a carga semanal é de 44 horas, o programa deverá exibir um alerta se a quantidade de horas exceder este limite e mostrar o total de horas excedido. Caso contrário, exibir a mensagem que não houve horas extras pelo funcionário.

let horasTrabalhadas = 50;
let cargaSemanal = 44;

if (horasTrabalhadas > cargaSemanal) {
    let horasExtras = horasTrabalhadas - cargaSemanal;
    
    console.log("O funcionário fez " + horasExtras + " horas extras.");
} else {
    console.log("O funcionário não fez horas extras.");
}