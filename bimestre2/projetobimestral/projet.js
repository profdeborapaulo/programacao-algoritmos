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
• Criar um fluxograma-

Além da entrega do código e do fluxograma, desenvolva um site em HTML que simule como seria a página oficial da empresa. O site deve:

• Utilizar imagens relevantes e bem posicionadas;
• Organizar os elementos de forma lógica e intuitiva;
• Apresentar um layout atrativo e profissional, adequado à identidade da empresa.

Bom divertimento!
*/

const prompt = require("prompt-sync") ();
let convid = Number(prompt("Insira o número de convidados: "));
let carne = convid * 300;
let lata = convid * 3;
let doce = convid;
let evento;

if(convid < 50){
    console.log("Número insuficiente de convidados para contratar o buffet.");
} else {

carne = carne + (carne * 6) / 100;
lata = lata + 9;
 if(convid <= 100){
    evento = "Evento Pequeno";
} else if(convid >= 101 && convid <= 200){
    evento = "Evento Médio";
} else {
    evento = "Evento Grande";
}
console.log("Quantidade de carne(em kg): ", carne / 1000);
console.log("Quantidade de refrigerantes(lata): ", lata);
console.log("Quantidade de doces: ", doce);
console.log("Classificação do evento: ", evento);
}