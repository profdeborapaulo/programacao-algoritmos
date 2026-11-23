/*
Exercício: Planejamento de Churrasco – Buffet F&F

O Buffet F&F – Festa Feliz está em expansão e precisa de um sistema simples para
ajudar no planejamento de compras de alimentos para seus eventos, evitando
desperdícios e garantindo que não falte comida. Você foi contratado para desenvolver
um programa em JavaScript (executado no terminal com Node.js) para auxiliar nesse
processo.

O objetivo do sistema está em criar um programa que:

• Receba o número de convidados  
• Valide essa informação
• Calcule a quantidade de alimentos necessários
• Classifique o evento conforme o tamanho

Regras de negócio  

1. Quantidade mínima de convidados O buffet só aceita eventos com no mínimo
50 pessoas.  
Portanto:
• Se o número for menor que 50:
Exibir: Número insuficiente de convidados para contratar o buffet.

Caso contrário:
• Continuar o cálculo normalmente

2. Consumo por pessoa:
Cada convidado consome, em média:
• 300 gramas de carne 3 latas de refrigerante 1 doce

3. Margem de segurança:  
Para evitar falta de produtos:
• Acrescentar 6% a mais de carne  
• Acrescentar 9 latas extras de refrigerante (total)  
• Para doces: não há margem (1 por pessoa)

4. Classificação do evento (OBRIGATÓRIO)  
Após validar os dados, seu programa deve classificar o evento:
• Até 100 pessoas: Evento pequeno
• De 101 até 200: Evento médio  
• Acima de 200: Evento grande

Saída esperada

O programa deve exibir:

• Quantidade de carne (em kg)  
• Quantidade de refrigerantes (latas)  
• Quantidade de doces  
• Classificação do evento
Desenvolvimento adicional obrigatório:
Antes de programar, você deverá:  
• Criar um fluxograma
*/

let convidados = 120;
let carne= 300;
let refrigerante = 3;
let refri_conv = convidados * refrigerante;
let doce = 1;
let margem_carne = carne * 0.06;
let margem_refri = refri_conv * 0.09;
let carne_conv = (carne + margem_carne) * convidados;

if (convidados < 50) {
    console.log("Número insuficiente de convidados para contratar o buffet.");
} else if (convidados <= 100) {
    console.log("Evento pequeno");
} else if (convidados > 100 && convidados <= 200) {
    console.log("Evento médio");
} else {
    console.log("Evento grande");
}
console.log(`Quantidade de carne: ${carne_conv / 1000} kg`);
console.log(`Quantidade de refrigerantes: ${refri_conv + margem_refri} latas`);
console.log(`Quantidade de doces: ${doce * convidados} doces`);