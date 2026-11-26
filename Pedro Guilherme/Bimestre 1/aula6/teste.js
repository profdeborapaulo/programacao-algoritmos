const prompt = require('prompt-sync')();

let nota = Number(prompt('digite a nota, por favor:'));

if(nota >= 90) {
    console.log("MB, parabéns");
}

else if (nota >= 80 && nota < 90) {
    console.log("B, parabéns");
}

else if (nota >= 70 && nota < 80) {
    console.log("R, da pra melhorar, mas ta bom.");
}

else if (nota >= 60 && nota < 70) {
    console.log("I, ta, tem que estudar mais.");
}

else {
    console.log("N/A, estude mais, por favor.");
}