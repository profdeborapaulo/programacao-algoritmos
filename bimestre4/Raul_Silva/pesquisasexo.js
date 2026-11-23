let totalMasculino = 0;
let totalFeminino = 0;
let somaSalarios = 0;
let sexoMaiorSalario = '';

while (continuar.toUppercase()==="S") {
    let idade = parseInt(prompt("Digite a idade:"));
    let sexo = prompt("Digite o sexo (M para masculino/F para feminino):").toUpperCase();
    let salario = parseFloat(prompt("Digite o salário:"));

    if (sexo === "M") {
        totalMasculino++;
    } else if (sexo === "F") {
        totalFeminino++;
    }
    somaSalarios += salario;
     if (salario> maiorSalario){
        maiorSalario = salario;
        sexoMaiorSalario = sexo;
    }
    continuar = prompt("Deseja cadastar outra pessoa? (S/N):");
 }

 let totalPessoas=totalMasculino + totalFeminino;
 let mediaSalarios =totalPessoas>0 ? (somaSalarios / totalPessoas) : 0;

 console.log ("---RELATÓRIO FINAL---");
    console.log("Total de pessoas do sexo masculino:", totalMasculino);
    console.log("Total de pessoas do sexo feminino:", totalFeminino);
    console.log("Total de pessoas cadastradas:", totalPessoas);
    console.log("Média dos salários do grupo: R$", mediaSalarios.toFixed(2));
    console.log("Sexo da pessoa com maior salário:", + sexoMaiorSalario);