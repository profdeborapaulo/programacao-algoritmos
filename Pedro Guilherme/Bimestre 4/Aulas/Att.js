let idade = [20, 14, 17, 19, 35, 42, 27, 39, 18, 15, 18, 20, 21, 61, 62, 78, 43, 19, 38, 21];
let sexo = ["M", "F", "F", "M", "F", "M", "M", "M", "F", "F", "F", "F", "M", "F", "F", "F", "M", "M", "F", "M"];
let salario = [2000, 3000, 3210, 2150, 1510, 1614, 8100, 15901, 9300, 2110, 3800, 9100, 10500, 5678, 50904, 3890, 2110, 1614, 1561, 2301];

let masc = 0;
let fem = 0;

let somamasc = 0;
let somafem = 0;
let total = idade.length;
let somatotal = 0;

for (let i = 0; i < total; i++) {

    somatotal += salario[i];

    if (sexo[i] == "M") {
        masc++;
        somamasc += salario[i];
        somamasc += salario [i];

    }

    else if  (sexo[i] == "F") {
        fem++;
        somafem += salario[i];
    }
}

let media = somatotal / total;

console.log("Tivemos " ,total, " pessoas na pesquisa.");
console.log("Tivemos ", masc, "homens e", fem, "mulheres em nossa pesquisa.");
console.log("O total salarial é de R$", somatotal);
console.log("A media salarial entre eles é de R$", media);

if (somamasc > somafem) {
    console.log("O salario dos homens nesta pesquisa é maior, com um total de", somamasc, "enquanto o de mulheres é de", somafem);
}

else{

    console.log("O salario das mulheres nesta pesquisa é maior, com um total de R$",somafem,"enquanto o de homens é R$",somamasc);

}