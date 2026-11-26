const prompt = require('prompt-sync')();
let respostasSim = 0;
let resposta;

console.log("=== SISTEMA DE TESTE DO POLÍGRAFO ===");

resposta = "";
while (resposta !== "sim" && resposta !== "não") {
    resposta = prompt("1. Você conhece a vítima? (Sim/Não)");
    if (resposta === null) {
        resposta = "";
    } else {
        resposta = resposta.toLowerCase().trim();
    }
    if (resposta !== "sim" && resposta !== "não") {
        console.log("Responda só com sim ou não!");
    }
}
if (resposta === "sim") respostasSim++;

resposta = "";
while (resposta !== "sim" && resposta !== "não") {
    resposta = prompt("2. Você estava no local da ocorrência? (Sim/Não)");
    if (resposta === null) {
        resposta = "";
    } else {
        resposta = resposta.toLowerCase().trim();
    }
    if (resposta !== "sim" && resposta !== "não") {
        console.log("Responda só com sim ou não!");
    }
}
if (resposta === "sim") respostasSim++;

resposta = "";
while (resposta !== "sim" && resposta !== "não") {
    resposta = prompt("3. Você possui informações sobre o ocorrido? (Sim/Não)");
    if (resposta === null) {
        resposta = "";
    } else {
        resposta = resposta.toLowerCase().trim();
    }
    if (resposta !== "sim" && resposta !== "não") {
        console.log("Responda só com sim ou não!");
    }
}
if (resposta === "sim") respostasSim++;

resposta = "";
while (resposta !== "sim" && resposta !== "não") {
    resposta = prompt("4. Você conversou com a vítima no dia do ocorrido? (Sim/Não)");
    if (resposta === null) {
        resposta = "";
    } else {
        resposta = resposta.toLowerCase().trim();
    }
    if (resposta !== "sim" && resposta !== "não") {
        console.log("Responda só com sim ou não!");
    }
}
if (resposta === "sim") respostasSim++;

resposta = "";
while (resposta !== "sim" && resposta !== "não") {
    resposta = prompt("5. Você considera que tem algum envolvimento com o caso? (Sim/Não)");
    if (resposta === null) {
        resposta = "";
    } else {
        resposta = resposta.toLowerCase().trim();
    }
    if (resposta !== "sim" && resposta !== "não") {
        console.log("Responda só com sim ou não!");
    }
}
if (resposta === "sim") respostasSim++;

resposta = "";
while (resposta !== "sim" && resposta !== "não") {
    resposta = prompt("6. Você conhece alguém relacionado à ocorrência? (Sim/Não)");
    if (resposta === null) {
        resposta = "";
    } else {
        resposta = resposta.toLowerCase().trim();
    }
    if (resposta !== "sim" && resposta !== "não") {
        console.log("Responda só com sim ou não!");
    }
}
if (resposta === "sim") respostasSim++;

resposta = "";
while (resposta !== "sim" && resposta !== "não") {
    resposta = prompt("7. Você esteve no local antes do ocorrido? (Sim/Não)");
    if (resposta === null) {
        resposta = "";
    } else {
        resposta = resposta.toLowerCase().trim();
    }
    if (resposta !== "sim" && resposta !== "não") {
        console.log("Responda só com sim ou não!");
    }
}
if (resposta === "sim") respostasSim++;

resposta = "";
while (resposta !== "sim" && resposta !== "não") {
    resposta = prompt("8. Você omitiu alguma informação durante a investigação? (Sim/Não)");
    if (resposta === null) {
        resposta = "";
    } else {
        resposta = resposta.toLowerCase().trim();
    }
    if (resposta !== "sim" && resposta !== "não") {
        console.log("Responda só com sim ou não!");
    }
}
if (resposta === "sim") respostasSim++;

resposta = "";
while (resposta !== "sim" && resposta !== "não") {
    resposta = prompt("9. Você sabe quem cometeu o crime? (Sim/Não)");
    if (resposta === null) {
        resposta = "";
    } else {
        resposta = resposta.toLowerCase().trim();
    }
    if (resposta !== "sim" && resposta !== "não") {
        console.log("Responda só com sim ou não!");
    }
}
if (resposta === "sim") respostasSim++;

resposta = "";
while (resposta !== "sim" && resposta !== "não") {
    resposta = prompt("10. Você está escondendo alguma informação importante? (Sim/Não)");
    if (resposta === null) {
        resposta = "";
    } else {
        resposta = resposta.toLowerCase().trim();
    }
    if (resposta !== "sim" && resposta !== "não") {
        console.log("Responda só com sim ou não!");
    }
}
if (resposta === "sim") respostasSim++;

let classificacao;
let mensagem;

if (respostasSim < 5) {
    classificacao = "inocente";
    mensagem = "O resultado se enquadra na classificação de " + classificacao + ".";
} else if (respostasSim === 5) {
    classificacao = "suspeito";
    mensagem = "O resultado se enquadra na classificação de " + classificacao + ". Isso indica que você deve ser investigado.";
} else if (respostasSim <= 8) {
    classificacao = "Cúmplice";
    mensagem = "O resultado se enquadra na classificação de " + classificacao + ". Isso indica que você ajudou no crime!";
} else {
    classificacao = "culpado";
    mensagem = "O resultado se enquadra na classificação de " + classificacao + ". Você tem 99% de chance de ser o culpado, GUILTY!!!";
}

console.log("=== RESULTADO DO TESTE === Respostas Sim: " + respostasSim + " | Classificação: " + classificacao + " | " + mensagem);