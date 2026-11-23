
/*O Buffet F&F – Festa Feliz está em expansão e precisa de um sistema simples para
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
*/
const prompt= require("prompt-sync")();

//Número de convidados

let convidados = Number(prompt("Insira a quantidade de convidados:"));

//Validação de convidados

if (convidados < 50 ) {

    console.log("Número insuficiente de convidados para contratar o buffet.")

} else {

    //Quantidades por convidado

let quantcarnekg = (convidados*300)/1000;
let numlatas = convidados*3;

let doces = convidados;

//Cálculo da margem de segurança

let kgcarne = quantcarnekg+(quantcarnekg*0.06);
let latas = numlatas+9;

//Classificação do evento

let classevento;

if (convidados >= 50 && convidados < 100) {

    classevento = "Evento Pequeno." ;

} else if (convidados > 101 && convidados < 200) {

    classevento = "Evento Médio.";

} else {

    classevento = "Evento Grande"

}   
    //Saída
    
    console.log("A quantidade esperada de carne é de:", kgcarne, "Kg.");

    console.log("A quantidade de latas de refrigerante necessária é de:", latas, "latas de refrigerante.");

    console.log("A quantidade de doces necessária é de:", doces, "doces.");

    console.log("O evento está classificado como:", classevento);
    
} 
