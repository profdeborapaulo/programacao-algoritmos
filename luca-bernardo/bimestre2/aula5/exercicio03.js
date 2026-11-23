const prompt= require("prompt-sync") ();

let distancia;
let frete;

distancia = Number(prompt("Insira a distancia em KM (kilometros) entre a cidade de destino e o nosso centro de distribuições: "));
frete = distancia * 2;

if (distancia <= 120) {
    console.log("A entrega terá frete grátis!"); 
} else if (distancia >= 121 && distancia <= 300) {
    console.log("O valor para a entrega será de R$" , frete);
} else {
    console.log("O endereço está fora da área de cobertura!")
    console.log("A empresa não realiza entregas nessa região.")
}