/*
2. uma empresa de e-commerce deseja automatizar o seu sistema
de entregas. para isso, será necessario desenvolver um programa
que avalie a distancia entre o centrpo de distribuição e a
cidade de destino para determinar a viabilidade de entrega
e o valor de frete.
regras de negocio: o calculo de frete e a disponibilidade do
serviço são baseados na distancia em quilometros (km), conforme
segue:
-ate 120km: a entrega é realizada e o frete é gratis
-de 121km a 300km: a entrega é realizada e o frete é calculado, sendo
r$2,00 por km
-acima de 300km: a entrega não é realizada na região
*/
function calcularFrete(distancia) {
    if (distancia <= 120) {
        return { entrega: true, frete: 0 };
    } else if (distancia > 120 && distancia <= 300) {
        return { entrega: true, frete: distancia * 2 };
    } else {
        return { entrega: false, frete: 0 };
    }
}

// Exemplo de uso
const distancia = 150; // exemplo de distância em km
const resultado = calcularFrete(distancia);
console.log(`Entrega: ${resultado.entrega}, Frete: R$${resultado.frete}`);