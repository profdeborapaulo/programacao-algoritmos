const prompt=require("prompt-sync") ( ) ;

let opcao = prompt("digite 1, se quiser suporte técnico, digite 2 para o financeiro, digite 3 para vendas, digite 4 para falar com atendente, digite 5 para sair: ");

switch (opcao) {
    case "1":
        console.log("bem vindo ao suporte técnico!");
        break;
        case "2":
            console.log("bem vindo ao financeiro!");
            break;
             case "3":
            console.log("bem vindo a área de vendas!");
            break;
             case "4":
            console.log("o que deseja comunicar a atendente?");
            break;
             case "5":
            console.log("volte sempre!");
            break;
            default:
                console.log("opção invalida.");
}