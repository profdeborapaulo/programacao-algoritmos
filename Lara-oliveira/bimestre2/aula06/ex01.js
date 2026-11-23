const prompt = require('prompt-sync')()

let convidados = Number(prompt("Digite o número de convidados: "));
let carne = (convidados * 300 + convidados * 300 * 0.06)/1000;
let latas = convidados * 3 + 9;
let doces = convidados; 
var tamanhoE;

if (convidados <50) {
    console.log('Número insuficiente de convidados para contratar o buffet.')
} else if (convidados >49 && convidados <=100) {
    var tamanhoE = 'pequeno.';
} else if (convidados >=101 && convidados<=200) {
    var tamanhoE = 'médio.';
} else if (convidados >200) {
    var tamanhoE = 'grande.';
}

console.log('O total de carne no evento é de ', (carne), 'kg.')
console.log('O total de refrigerantes no evento é de ', (latas),' latas.')
console.log('O total de doces nesse evento é de ', (doces), ' doces.')
console.log('O evento é ',(tamanhoE) )
