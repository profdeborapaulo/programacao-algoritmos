const tamanho = 10; // Altura
for (let i = 1; i <= tamanho; i++){
    let linha = " ";
    // Adicionando espaço
    for(let j = 1; j <= tamanho - 1; j++){
        linha += " ";
    }
     for (let k = 1; k <=2 * 1; k++){
        linha += "*"
    }
    console.log(linha)
}
const altura = 10; // Altura da árvore
 
for (let i = 1; i <= altura; i++) {
    let linha = " ";
 
    // Adiciona espaços antes das estrelas
    for (let j = 1; j <= altura - i; j++) {
        linha += " ";
    }
 
    // Adiciona estrelas na linha
    for (let k = 1; k <= 2 * i - 1; k++) {
        linha += "*";
    }
 
    console.log(linha);
}