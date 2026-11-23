/*
Uma empresa  necessita de um programa que calcule a quantidade de horas extras semanais de um funcionário. Sabendo que a carga mensal semanal é de 44 horas exceder este limite e mostrar o total de horas excedido. Caso contrário, exibir a mensagem que não houve horas extras pelo funcionário.
*/
let quant = 36;
let cargSeman = 44;

if(quant > cargSeman){
    console.log("O valor de horas foi excedido", quant,"horas extras")
}else{
        console.log("O valor de horas não foi excedido", quant,"horas extras")
}
