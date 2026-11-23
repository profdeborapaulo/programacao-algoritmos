let numero = parseInt(prompt("Digite um número inteiro positivo:"));

if(numero>=0){
    for(let i=numero; i>=0; i--){
        console.log(i);
    }
}else{
    console.log("Por favor, digite um número inteiro positivo.");
}