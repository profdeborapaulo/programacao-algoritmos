/*
2. UMa empresa de e-comerce deseja automatizar o seu sitema de entrega. Para isso, será necessario desenvolver um programa que avalie a distância entre o centro de distribuição e a cidade de destino para determinar a viabilidade de entrega e o valor do frete. Regras de negócio: O calculo do frete e a disponilibidade do serviço são baseados na distancia em quilometros (Km), conforme segue:
-Ate 120km: A entrega e realizada e o frete é gratis;
- De 121km a 300km: a entrega não e realizada na região.Ao final, o programa deverá exibir como saida:
- Se a entrega for gratis: informar que o frete é gratuito;
- Se houver a cobrança: exibir o valor total do frete formatado em R$;
- Se estiver fora da área de corbetura: informar que a empresa não realiza entregas na região.
 */
const prompt= require("prompt-sync")();
let distancia = prompt("insira a distancia entre o centro de distribuição e a cidade de destino: ");
if (distancia <= 120){
    console.log("O frete é gratuito");
} else if (distancia > 120 && distancia <= 300){
    let frete = distancia * 0.5;
    console.log("O valor total do frete é R$" + frete);
} else {
    console.log("A empresa não realiza entregas na região");
}   