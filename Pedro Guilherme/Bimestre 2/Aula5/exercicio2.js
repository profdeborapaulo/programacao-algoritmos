/*Uma empresa de e-commerce deseja automatizar o seu sistema de entregas. para isso, será
 necessário desenvolver um programa que avalie a distancia entre o centro de distribuição
 e a cidade de destino para determinar a viabilidade de entrega e o valor do frete.
 Regras de negócio: O cálculo do frete e a disponibilidade do serviço são baseados na distância em quilômetros
 (Km), conforme segue:

 - Até 120Km: A entrega é realizada e o frete é grátis.
 - De 121Km a 300Km: A entrega é realizada e o frete é calculado, sendo R$2,00 por km.
 - Acima de 300Km: A entrega não é realizada na região.
 Ao final, o program    'a deverá exibir como saída:
 - Se a entrega for grátis: informar que o frete é gratuito;
 - Se houver cobrança: exibir o valor total do frete em formato de R$
 - Se estiver fora da área de cobertura: informar que a empresa não realiza entregas
 na região.
 */

 let distancia=135;
 let preco;
 
 if (distancia <=120){
    let preco=0;
    console.log("a entrega é gratis!", preco);
 }

 else if (distancia >=121 && distancia <=300){
    let preco=(300-distancia)*2;
    console.log("a entrega custa:", preco)
 }

 else {
    console.log("A entrega não pode ser realizada pois a empresa não realiza entregas na região!");
 }