/*
3. Uma empresa de e-commerce deseja automatizar o seu sistema de entregas. Para isso, será necessário desenvolver um programa que avalie a distância entre o centro de distribuição e a cidade de destino para determinar a viabilidade de entrega e o valor do frete.
Regras de negócio:
- O cálculo do frete e a disponibilidade do serviço são baseados na distância em quilômetros (Km), conforme segue:
- Até 120km: A entrega é realizada e o frete é grátis;
- De 121km a 300km: A entrega é realizada e o frete é calculado, sendo R$2,00 por km.
- Acima de 300km: A entrega não é realizada na região.
Ao final, o programa deverá exibir como saída:
- Se a entrega for grátis: informar que o frete é gratuito;
- Se houver cobrança: exibir o valor total do frete formatado em R$;
- Se estiver fora da área de cobertura: informar que a empresa não realiza entregas na região.
*/
const prompt = require("prompt-sync") ();

let distanc = Number(prompt("Informe a distância do destino (em km): "));
if(distanc <= 120){
    console.log("A entrega pode ser realizada e possui frete grátis");
} else if(distanc >= 121 && distanc <= 300){
    console.log("A entrega pode ser realizada e o frete será de: R$", distanc * 2);
} else{
    console.log("A entrega não pode ser realizada na região");
}

