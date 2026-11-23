let renda = 1000;
let financiamento = 18;
let meses = 6;

let parcela = financiamento / meses;

if (parcela <= renda * 0.3) {
    console.log("Plano APROVADO");
} else {
    console.log("Plano REPROVADO");
}