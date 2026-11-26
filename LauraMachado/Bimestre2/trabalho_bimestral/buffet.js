
let convidados = 100;
let carne = 300;
let carne_2 = convidados * carne;
let carne_3 = carne_2 * (6/100);
let carne_4 = (carne_2 + carne_3) / 1000;
let refri = 3;
let refri_2 = convidados * refri;
let refri_3 = refri_2 + 9;
let doces = 1;
let doces_2 = doces * convidados;

if (convidados > 50) {
    console.log("Podemos realizar seu evento!");
}
else {
    console.log("Não podemos realizar seu evento. Quantidade de pessoas inferior ao mínimo permitido de 50!");
}

if (convidados <= 100 && convidados > 50) {
    console.log("Seu evento é um evento pequeno.");
}
else if (convidados <= 200 && convidados > 100) {
    console.log("Seu evento é um evento médio.");
}
else if (convidados > 200) {
    console.log("Seu evento é um evento grande.");
}

console.log("Quantidade de carne:", carne_4,"kg");
console.log("Quantidade de refrigerantes:", refri_3);
console.log("Quantidade de doces:", doces_2);