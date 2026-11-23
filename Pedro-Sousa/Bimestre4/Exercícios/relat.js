const prompt = require("prompt-sync")();

//Declaração de Variáveis
let idadem = Number(prompt ("Insira o total da Idade Masculina"));
let idadef = Number(prompt ( "Insira o total da Idade Feminina"));

let sexom = Number(prompt ( "Insira a quantidade de pessooas do Sexo Masculino"));
let sexof = Number(prompt ("Insira a quantidade de pessoas do Sexo Feminino"));

let tsalariom = Number(prompt ( "Insira o total dos Salários das pessoas do Sexo Masculino"));
let tsalariof = Number(prompt ( "Insira o total dos Salários das pessoas do Sexo Feminino"));

console.log("============ RESULTADO DA PESQUISA ============");
console.log("Total de Homens:", sexom, ".");
console.log("Total de Mulheres:", sexof, ".");

let mediasal = (tsalariom + tsalariof)/2;
console.log("A média salarial é de:", mediasal, ".");

let totpessoas = sexof + sexom;
console.log("Total de pessoas pesquisadas:", totpessoas, ".")

if (tsalariom > tsalariof) {
    
    console.log("A maior média salarial é do sexo Masculino.")
} else {

    console.log("A maior média salarial é do sexo Feminino")
}

console.log("================================================");