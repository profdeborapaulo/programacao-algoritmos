/* Instruções
* este arquivo contem o codigo para criar a arvore de natal estatica usando lógica
 de programaçao.
* Ele utiliza o JavaScript para desenhar a arvore
* Vamos criar uma variavel para armazenar a altura da arvore e , em seguida, usar um loop
para desenhar cada nivel da arvore.
Variavel 1 irá definir qual linha estou desenhando, e a variável irá definir quantas estrelas
 colocar na linha. 
 É o mesmo conceito de uma tabela 
*/

const altura = 5; // altura da arvore
for (let i = 1; i <= altura; i++) {
    let linha = '';
    // Adiciona espaços em branco antes das estrelas
    for (let j = 1; j <= altura - i; j++) {
        linha += ' ';
    }   
    // Adiciona estrelas na linha
    for (let k = 1; k <= 2 * i - 1; k++) {
        linha += '*';
    }
    console.log(linha);
}