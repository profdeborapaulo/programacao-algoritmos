/* Instruções:
* Este arquivo contém o código para criar a árvore de natal estática usando lógica de programação.
* Ele utiliza JavaScript para desenhar a árvore.
* Vamos criar uma variável para armazenar a altura da árvore e, em seguida, usar um loop para desenhar cada nível da árvore.
* Variável 1 irá definir qual linha estou desenhando, e a variável 2 irá definir quantas estrelas colocar na linha. É o mesmo que conceito de uma tabela. */

const altura = 10;
for(let i = 1; i <= altura; i++){
    let linha = " ";
    let base = "";
    //Adiciona espaços antes das estrelas
    for(let j = 1; j <= altura - i; j++){
        linha += " ";
    }
    //Adiciona estrelas na linha
    for(let k = 1; k <= 2 * i - 1; k++){
        linha += "*";
    }
    console.log(linha);
}