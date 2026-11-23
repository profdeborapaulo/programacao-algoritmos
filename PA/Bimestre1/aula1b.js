//Desenvolver um programa em JS e fluxograma que calcula a fórmula do Bhaskara e exibir o resultado
let a = 1;
let b = -5;
let c = 6;

let delta = b * b - 4 * a * c;

// delta ** 0.5 calcula a raiz quadrada de delta
let x1 = (-b + (delta ** 0.5)) / (2 * a);
let x2 = (-b - (delta ** 0.5)) / (2 * a);

console.log("x1 =", x1);
console.log("x2 =", x2);
