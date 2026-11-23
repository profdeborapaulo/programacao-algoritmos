// Uma academia de natação precisa de um sistemaque organize a categoria dos seus atletas, conforme sua idade: -menor que 5:"Categoria não permitida"; - maior ou igual a 5 e menor  ou igual a 7: "Categoria Infantil A"; - maior que 7 e menor ou igual a 14:"Categoria Infantil B"; - maior de 14 e menor ou igual a 17:"Categoria Juvenil"; -caso contrário: "Categoria Sênior".
let idade = 6;

if(idade < 5)(
    console.log("Categoria não permitida")
);
else if(idade >= 5 && idade <= 7)(
    console.log("Categoria Infantil A")
);
else if(idade > 7 && idade <= 14 )(
    console.log("Categoria Infantil B")
);
else if (idade > 14 && idade <= 17)(
    console.log("Categoria Juvenil")
);
else(
    console.log ("Categoria Sênior")
);