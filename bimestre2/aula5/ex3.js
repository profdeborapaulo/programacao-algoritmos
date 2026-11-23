/*
3. uma academia de natação precisa de um sistema que organize a categoria
dos seus atletas, conforme sua idade:
-menor que 5: "categoria não permitida!";
-maior ou igual a 5 e menor ou igual a 7: "categoria infantil a";
-maior ou igual a 7 e menor ou igual a 14: "categoria infantil b";
-maior de a 14 e menor ou igual a 17: "categoria juvenil";
-caso contrario: "categoria sênior".
*/
function categorizeAthlete(age) {
    if (age < 5) {
        return "Categoria não permitida!";
    } else if (age >= 5 && age <= 7) {
        return "Categoria infantil A";
    } else if (age >= 7 && age <= 14) {
        return "Categoria infantil B";
    } else if (age > 14 && age <= 17) {
        return "Categoria Juvenil";
    } else {
        return "Categoria Sênior";
    }
}