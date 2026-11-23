/* Instruções
* Este arquivo contém o código para criar a árvore de Natal estática usando lógica de programação.
* Ele utiliza JavaScript para desenhar a árvore
Vamos criar uma variável para armazenar a altura da árvore e, em seguida, usar um loop para desenhar cada nível da árvore.
Variavel 1 irá definir qual linha estou desenhando, e a variável irá definir quantas estrelas colocar na linha. É o mesmo conceito de uma tabela. */

const altura = 10; // Altura da árvore
for (let i = 1; i <= altura; i++) {
    let linha = " ";
    // Adiciona espaços antes das estrelas
    for (let j = 1; j <= altura - i; j++) {
        linha += " ";
    }
    // Adiciona estrelas na linha
    for (let k = 1; k <= 2 * i; k++) {
        linha += "*";
    }
    console.log(linha);
}