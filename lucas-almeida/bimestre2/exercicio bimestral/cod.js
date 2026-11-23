const prompt=require("prompt-sync") ( );
let pessoas=Number(prompt("digite o numero de pessoas que vão ao evento:"));
let carne=pessoas*300;
let carnex=((carne*6/100) + carne)/1000;
let lata=(pessoas*3) +9;
let doces=pessoas;
if(pessoas<50){
    console.log("Número insuficiente de convidados para contratar o buffet.")
}
else if(pessoas<=100){
console.log("Este é um evento pequeno,o total de coisas a levar é:","carne=",carnex,"kg",",refrigerante =",lata,"latas","e doces=",doces);
}
else if(pessoas<=200){
console.log("Este é um evento Médio,o total de coisas a levar é:","carne=",carnex,"kg",",refrigerante =",lata,"latas","e doces=",doces);
}
else {
console.log("Este é um evento Grande,o total de coisas a levar é:","carne=",carnex,"kg",",refrigerante =",lata,"latas","e doces=",doces);

}
