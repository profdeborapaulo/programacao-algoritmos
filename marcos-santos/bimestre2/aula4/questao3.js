let RT = 4000;
let VF = 3500;
let MP = 2;

let VP = VF / MP;
let VMM = RT * 0.3;

console.log("Renda total da familia: R$", RT);
console.log("Valor do financiamento: R$", VF);
console.log("Quantidade de meses:", MP);
console.log("Valor da parcela: R$", VP);
console.log("Valor máximo possível para a mensalidade: R$", VMM);

if (VP <= VMM) {
    console.log("Pagamento APROVADO");
}

else{
    console.log("Pagamento RECUSADO");
}