/* Relatório do uso de IA:

O for foi utilizado para percorrer a lista de perguntas e apresentar cada uma delas durante o interrogatório.
Já o while foi utilizado para validar as respostas, permitindo apenas as opções “sim” e “não”, 
repetindo a pergunta caso fosse digitada uma resposta inválida.
A IA também me auxiliou a compreender melhor o funcionamento dessas estruturas e como aplicá-las no código. 
Dessa forma, pude aprender sobre sua utilização e entender melhor a lógica desenvolvida no projeto.

prompt: Como funciona For e While, e com posso encaixa-los num código de poligrafo?
*/

const prompt = require("prompt-sync")();

let perguntas = [
    "Você sabe qual objeto foi roubado?",
    "Você entrou na sala do crime no horário em que ocorreu?",
    "Seu crachá registrou sua entrada às 11:00?",
    "Você estava sozinho no momento do crime?",
    "Você estava sozinho no seu turno de ontem?",
    "Você viu o celular sendo roubado?",
    "Você confirma que estava sozinho naquele momento?",
    "Você tem certeza de onde estava na hora do roubo?",
    "Você chegou a encostar no aparelho?",
    "A perícia vai encontrar suas digitais no aparelho?"
];

let respostas = [];
let resposta;
let sim = 0;
let nao = 0;
let pontos = 0;

console.log("INTERROGATÓRIO");

resposta = prompt("Deseja começar? (sim/nao): ").toLowerCase();

// Utilizei IA para me auxiliar a entender o funcionamento do for e while, ja que havia ficado com dúvidas


while (resposta != "sim" && resposta != "nao") {
    console.log("Digite apenas sim ou nao!");
    resposta = prompt("Deseja começar? (sim/nao): ").toLowerCase();
}

if (resposta == "sim") {

    for (let i = 0; i < perguntas.length; i++) {

        console.log("\n" + perguntas[i]);

        resposta = prompt("Responda (sim/nao): ").toLowerCase();

        while (resposta != "sim" && resposta != "nao") {
            console.log("Resposta invalida! Digite sim ou nao.");
            resposta = prompt("Responda (sim/nao): ").toLowerCase();
        }

        if (resposta == "sim") {
            respostas[i] = true;
            sim++;
        } else {
            respostas[i] = false;
            nao++;
        }
    }

    /* tabela de pontos q preciso usar:
    0-2 PONTOS - inocente
    3-5 PONTOS - Suspeito
    6-8 PONTOS - Cumplice
    9-10 PONTOS - Culpado
     */
    pontos = sim;

    console.log("\n Resultadoss");
    console.log("Quantidade de sim: " + sim);
    console.log("Quantidade de nao: " + nao);
    console.log("Pontos: " + pontos);

    if (pontos <= 2) {
        console.log("Provavel inocente");
    } else if (pontos <= 5) {
        console.log("Possivel suspeito");
    } else if (pontos <= 8) {
        console.log("Possivel cumplice");
    } else {
        console.log("Culpado");
    }

} else {
    console.log("Interrogatorio cancelado.");
}

/* essa é uma versão apenas de JS do poligrafo */
