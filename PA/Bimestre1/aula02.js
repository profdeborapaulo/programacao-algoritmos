//Exercício 1, utilizando a estrutura de dados, switch case, desenvolva um programa para uma central de atendimento, cuja as opções são (1) Suporte Técnico, (2)Financeiro, (3)Vendas, (4)Falar com atendente e (5)Sair
//Usar o JS e fluxograma para concluir a tarefa

let valor1 = "Suporte Técnico";
let valor2 = "Setor Finaceiro";
let valor3 = "Setor de Vendas";
let valor4= "Falar com Atendente";
let valor5 = "Sair";
const area = valor3;
switch(area){
     case "Suporte Técnico":
        console.log("Caso queira falar com o Suporte Técnico");
     break;
     case "Setor Financeiro":
        console.log("Caso queira falar com o Setor Financeiro");
     break;
     case "Setor de Vendas":
        console.log("Caso queira falar com o Setor de Vendas");
        break;
        case "Falar com Atendente":
            console.log("Caso queira falar com Atendente");
            break;
            default:
                console.log("Você escolheu nenhuma das opções apresentadas, logo a última opção que lhe resta é a de sair");
    }