const PromptSync = require("prompt-sync");

/*
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
const prompt= require ("prompt-sync") ();
let convid= Number(prompt("Insira o número de convidados:"));
let carne= convid*300;
let refri= (convid*3) + 9 ;
let doce = convid;
let segcarne= (carne*6/100 + carne ) /1000;

if (convid < 50 ) {
console.log ("Número insuficiente de convidados para contratar o buffet.")
} else if (convid >= 50 && convid <=100) {
console.log ("Seu evento é pequeno")
} else if (convid >100 && convid <=200) {
console.log ("Seu evento é médio")
} else  {
console.log ("Seu evento é grande")
} if (convid >= 50) {
console.log ("A quantidade de carne necessária será de:", segcarne, "kg");
console.log ("A quantidade de latas de refrigerante necessária será de:", refri);
console.log ("A quantidade de doces necessária será de:", doce);
}

