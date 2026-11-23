const altura = 20; //altura da arvore
for (let i = 1; i <= altura; i++){
    let linha = " ";
    //adicione espaços antes das estrelas
    for (let j = 1; j <=altura - i; j++){
        linha += " ";
    }
    //adicione estrelas nas linhas 
    for( let k = 1; k <= 2 * i; k++){
        linha += "*";
    }
    console.log(linha);
    
}