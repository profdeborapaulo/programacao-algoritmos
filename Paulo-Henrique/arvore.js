/* 
* este arquivo contem o codigo para criar a arvore de natal estatica usando logica de programacao
* Ele utiliza Javascript para desenhar a arvore de natal,
* Vamos criar uma variavel para armazenar a altura da arvore e, em seguida usar o loop para desenhar cada nivel da arvore.
* Variavel 1 ira definir qual a linha estou desenhando, e a variavel 2 ira definir quantas estrelas colocar na linha . E o mesmo conceito de uma tabela.
*/

const altura = 5; 
for (let i = 1; i <= altura; i++) {
    let linha = ""; 
    for(let j = 1; j <= altura - i; j++) {
        linha += " "; 
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        linha += "*";
    }
    console.log(linha);
}