function classificarNota(nota) {
    if (nota >= 90) {
        return "MB";
    } else if (nota >= 80) {
        return "B";
    } else if (nota >= 70) {
        return "R";
    } else if (nota >= 60) {
        return "I";
    } else {
        return "NA";
    }
}

// Exemplos de uso
console.log(classificarNota(95));  // MB
console.log(classificarNota(85));  // B
console.log(classificarNota(75));  // R
console.log(classificarNota(65));  // I
console.log(classificarNota(50));  // NA