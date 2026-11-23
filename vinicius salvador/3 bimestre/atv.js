const prompt=require("prompt-sync")();

const options = prompt("escolha uma opção de atendimento")
switch (options) {
    case 1:
console.log("voce esta sendo encaminhado para o suporte técnico");
break;
    case 2:
console.log("voce esta sendo encaminhado para o suporte financeiro");
break;
    case 3:
console.log("voce esta sendo encaminhado para o suporte de vendas");
break;
    case 4:
console.log("voce esta sendo encaminhado para falar com um atendente");
break;
    case 5:
console.log("voce saiu")
break;


}