/*  Intruções: 
* Este arquivo contém o código para criar a árvore de Natal
estática usando lógica de programação.
* ele utiliza a JavaScript para desenhar a àrvore.
Vamos criar uma variável para armarzenar a altura árvore, e, em seguida, usar um loop para desenhar cada nivel da árvore.
Variável 1 irá definir qual linha estou desenhando, e a variável, irá definir quantas estralas colocar na linha. É o mesmo conceito de uma tabela.
 */

const altura = 88; // altura da arvore
for (let i = 1; i <= altura; i++) {
    let linha = " ";
    //adiciona espaços antes das estralas
    for (let j = 1; j <= altura - i; j++) {
        linha += " ";

    }

//adiciona estrelas na linha

for (let k = 1; k <= 2 * i - 1; k++) {
    linha += "*";
}
    console.log(linha);
}