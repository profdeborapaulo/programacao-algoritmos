//Desenvolver um programa que receba o nome e a idade de um cidadão em anos. Em seguida, o programa irá avaliar e responder se a idade digitada é válida, se for válida se o voto é obrigatório ou facultativo. Ao final, exibir as informações. Produzir em JS e fluxograma

let nome ="Aurélio";
let idade = 54;
if (idade >= 16 && idade <= 17 && idade > 69){
    console.log("A pessoa", nome , "tem o direito de votar (não obrigatório)")
}
else if(idade >= 18 && idade <= 69){
    console.log("A pessoa", nome, " tem o direito de votar (obrigatório)")
}
else if(idade < 16){
    console.log("A pessoa", nome ,"não pode votar com essa idade")
}
else{
    console.log("A pessoa", nome , "tem o direito de votar (não obrigatório)")
}
