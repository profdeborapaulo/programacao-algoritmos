//Teste do Polígrafo//
/*O famoso consultor Patrick Jane está auxiliando a polícia em uma investigação criminal, e precisa de uma ferramenta tecnológica para apoiar a análise de suspeitos.
Para isso, ele solicitou o desenvolvimento de teste do polígrafo, capaz de coletar informações dos investigados e emitir um parecer baseado nas respostas fornecidas.
Objetivo do projeto:
Desenvolver um sistema em JS para realizar um questionário investigativo e ao final apresentar uma classificação do envolvimento do investigado na ocorrência.
O sistema deverá exibir 10 perguntas ao investigado.
Como requisitos funcionais:
RF01: O sistema deverá apresentar as 10 perguntas ao usuário;
RF02: Cada pergunta deverá possuir apenas duas opções de respostas (Sim / Não);
RF03: Ao finalizar o teste, o sistema deverá contabilizar a quantidade de respostas 'Sim';
RF04: O sistema deverá emitir um parecer conforme as regras abaixo:
1 - 5 = Inocente;
5 = Suspeita;
6-8 = Cúmplice;
9-10 = Culpado/Red John
RF05: O resultado deverá exibir:
Quantidade de respostas 'Sim';
Classificação do Investigado;
Mensagem personalizada conforme o resultado (Inocente.../Culpado.../Suspeita...)

Regras e utilização da IA
É permitido usar IA para:
Gerar ideias para as perguntas;
Pesquisar sobre a série;
Esclarecer dúvidas pontuais sobre o desenvolvimento do código;
Esclarecer dúvidas pontuais sobre os erros encontrado
Não é permitido:
Entregar o projeto totalmente gerado por IA sem compreensão do código;
Copiar e colar códigos sem analisar e adaptar;
Declarar autoria do código que não consiga explicar
Relatório obrigatório de uso da IA
Caso utilize qualquer ferramenta de IA, você deverá entregar junto do projeto um documento contendo:
Ferramenta utilizada;
Prompt utilizado;
Trechos utilizados, identificando as partes que tiveram apoio da IA, e fazer a devida justificativa;
Responder o que você aprendeu utilizando a ferramenta que antes você não sabia;
Informar as maiores dificuldades geradas na tarefa;
Entregar o código JS;
Entregar o relatório em formato PDF;
Fluxograma
Prazo de entrega: 26/10 */


const prompt = require('prompt-sync')();
const pergunta1 = prompt('Você conhecia vitima?[Sim/Nao]');
const pergunta2 = prompt('Você ter uma arma?[Sim/Nao]');
const pergunta3 = prompt('Você usa alguma coisa (drogas/cigarros/bebidas)?[Sim/Nao]');
const pergunta4 = prompt('Você conhecia o local onde a vítima foi morta?[Sim/Nao]');
const pergunta5 = prompt('Você conhece alguém que pode estar ligado com a vítima?[Sim/Nao]');
const pergunta6 = prompt('Você estava em um relacionamento com a vítima?[Sim/Nao]');
const pergunta7 = prompt('Você já foi preso alguma vez?[Sim/Nao]');
const pergunta8 = prompt('Você já brigou com a vítima alguma vez?[Sim/Nao]');
const pergunta9 = prompt('Alguém pode confirmar o que você estava fazendo aquele dia?[Sim/Nao]');
const pergunta10 = prompt('Você notou algo de estranho na vítima atualmente?[Sim/Nao]');

let answers = [
    pergunta1,
    pergunta2,
    pergunta3,
    pergunta4,
    pergunta5,
    pergunta6,
    pergunta7,
    pergunta8,
    pergunta9,
    pergunta10
];
    

let Nome = prompt;
let Ponts = 0;

for (const resposta of answers) {
    if (resposta.trim().toUpperCase() === 'SIM') {
        Ponts++;
    }
}

if (Ponts < 5) {
    console.log("Você,", Nome, "pode ser declarada inocente por suas posições que foram:",
        pergunta1, pergunta2, pergunta3, pergunta4, pergunta5,
        pergunta6, pergunta7, pergunta8, pergunta9, pergunta10,
        ", e resultou em uma pontuação de", Ponts);

} else if (Ponts == 5) {
    console.log("Você,", Nome, "pode ser declarada suspeita por suas posições que foram:",
        pergunta1, pergunta2, pergunta3, pergunta4, pergunta5,
        pergunta6, pergunta7, pergunta8, pergunta9, pergunta10,
        ", e resultou em uma pontuação de", Ponts);

} else if (Ponts >= 6 && Ponts < 9) {
    console.log("Você,", Nome, "pode ser declarada cúmplice de tais atos contra a vítima, e pegaremos o real assassino através de você. E também por suas posições que foram:",
        pergunta1, pergunta2, pergunta3, pergunta4, pergunta5,
        pergunta6, pergunta7, pergunta8, pergunta9, pergunta10,
        ", e resultou em uma pontuação de", Ponts);

} else if (Ponts >= 9) {
    console.log("Você,", Nome, "pode ser declarada o assassino e pode ser até mesmo o Red John se a sua pontuação for 10. E também por suas posições que foram:",
        pergunta1, pergunta2, pergunta3, pergunta4, pergunta5,
        pergunta6, pergunta7, pergunta8, pergunta9, pergunta10,
        ", e resultou em uma pontuação de", Ponts);
}