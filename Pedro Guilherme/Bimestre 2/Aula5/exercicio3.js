/* Uma academia de natação precisa de um sistema que organize a categoria dos seus atletas
conforme sua idade:
- menor que 5: "categoria não permitida!";
- maior ou igual a 5 e menor ou igual a 7: "categoria infantil A";
- maior que 7 e menor ou igual a 14: "categoria infantil B";
- maior que 14 e menor ou igual a 17: "Categoria Juvenil";
- caso contrário: " Categoria Sênior".
*/

let idade=93;

if (idade <5){
    console.log(" Categoria não permitida!");
}

else if (idade >=5 && idade <=7){
    console.log(" Categoria infantil A");
}

else if (idade >7 && idade <= 14){
    console.log("categoria infantil B");
}

else if (idade >14 && idade<= 17){
    console.log("categoria Juvenil");
}

else {
    console.log(" Categoria Sênior");
}