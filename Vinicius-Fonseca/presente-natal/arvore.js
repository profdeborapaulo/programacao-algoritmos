const altura = 15; //altura da arvore
for (let i = 1; i <= altura; i++){
    let linha = " ";
    // Adicione espaços antes das estrelas
    for (let j = 1; j <= altura - i; j++){
        linha += " ";
    }
    // Adicione estrelas na linha
    for (let k = 1; k <= 2 * i - 1; k++){
        linha += "*";
    }
    console.log(linha);
}
