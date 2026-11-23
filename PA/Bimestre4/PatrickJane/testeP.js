
const prompt = require('prompt-sync')();

// Função para aceitar somente S ou N
function fazerPergunta(texto) {
    let resposta = prompt(texto + ' [S/N] ').trim().toUpperCase();

    while (resposta !== 'S' && resposta !== 'N') {
        console.log('Resposta inválida! Digite S para Sim ou N para Não.');
        resposta = prompt(texto + ' [S/N] ').trim().toUpperCase();
    }

    return resposta;
}

// As 10 perguntas
const pergunta1 = fazerPergunta('Você conhecia a vítima?');
const pergunta2 = fazerPergunta('Você tinha uma arma?');
const pergunta3 = fazerPergunta('Você usa alguma substância, como drogas, cigarro ou bebidas alcoólicas?');
const pergunta4 = fazerPergunta('Você conhecia o local onde a vítima foi morta?');
const pergunta5 = fazerPergunta('Você conhece alguém que pode estar ligado à vítima?');
const pergunta6 = fazerPergunta('Você estava em um relacionamento com a vítima?');
const pergunta7 = fazerPergunta('Você já foi preso alguma vez?');
const pergunta8 = fazerPergunta('Você já brigou com a vítima alguma vez?');
const pergunta9 = fazerPergunta('Alguém pode confirmar o que você estava fazendo naquele dia?');
const pergunta10 = fazerPergunta('Você notou algo estranho na vítima recentemente?');

// Nome do investigado
const Nome = prompt('Digite o nome do suspeito: ');

// Reunindo as respostas
const respostas = [
    pergunta1, pergunta2, pergunta3, pergunta4, pergunta5,
    pergunta6, pergunta7, pergunta8, pergunta9, pergunta10
];

// Contabilizando as respostas Sim
let Ponts = 0;

for (const resposta of respostas) {
    if (resposta === 'S') {
        Ponts++;
    }
}

// Classificação e mensagem
let classificacao;
let mensagem;

if (Ponts < 5) {
    classificacao = 'Inocente';
    mensagem = `Patrick Jane: ${Nome}, suas respostas indicam baixa suspeita. Continue colaborando com a investigação!`;
} else if (Ponts === 5) {
    classificacao = 'Suspeita';
    mensagem = `Patrick Jane: ${Nome}, suas respostas levantaram suspeitas. Precisamos investigar melhor!`;
} else if (Ponts >= 6 && Ponts <= 8) {
    classificacao = 'Cúmplice';
    mensagem = `Patrick Jane: ${Nome}, suas respostas indicam um possível envolvimento. Vamos investigar suas ligações com o caso!`;
} else {
    classificacao = 'Culpado/Red John';
    mensagem = `Patrick Jane: ${Nome}, suas respostas atingiram o nível máximo de suspeita. Red John, é você?`;
}

// Resultado final
console.log('\n========== RESULTADO DO POLÍGRAFO ==========');
console.log('Investigado:', Nome);
console.log('Quantidade de respostas Sim:', Ponts);
console.log('Quantidade de respostas Não:', 10 - Ponts);
console.log('Classificação:', classificacao);
console.log(mensagem);

console.log('\nRespostas fornecidas:');
respostas.forEach((resposta, indice) => {
    console.log(`Pergunta ${indice + 1}: ${resposta}`);
});

console.log('============================================');
