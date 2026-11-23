/*
Uma empresa necessita de um programa que calcule a quantidade de horas extras semanais de um funcionário.
Sabendo que a carga semanal é de 44 horas, o programa deve exibir um alerta se a quantidade de horas exceder esse limite
e mostrar o total de horas extras do funcionário.
*/

let horasTrabalhadas = 50; // Altere este valor para testar outras quantidades de horas
let cargaSemanal = 44;

if (horasTrabalhadas > cargaSemanal) {
	let horasExtras = horasTrabalhadas - cargaSemanal;
	console.log("Alerta: carga horária excedida!");
	console.log("Total de horas extras:", horasExtras);
} else {
	console.log("Não há horas extras.");
}

console.log("Horas trabalhadas:", horasTrabalhadas);
console.log("Carga semanal:", cargaSemanal);
