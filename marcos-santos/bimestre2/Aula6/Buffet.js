const prompt= require("prompt-sync")();

let Quan_Convidados = prompt("insira a quantidade: ");
let Carne_da_festa = Quan_Convidados * 300;
let latas_R = Quan_Convidados * 3
let doces = Number(Quan_Convidados);

// margem de segurança 
let carne_reserva = (Carne_da_festa / 100) * 6;
let latas_reservas = latas_R + 9;

let Carne_da_festa_em_kg = (carne_reserva + Carne_da_festa) / 1000;

if (Quan_Convidados < 50) {
    console.log("Não realizamos festas com menos de 50 pessoas")
}

else if (Quan_Convidados => 50 && Quan_Convidados <= 100) {
      let Evento = "Evento pequeno";

    console.log("No evento, teremos:",
         Carne_da_festa_em_kg,"kg de carne;",
          latas_reservas, "latas de refrigerante;",
           doces, "doces;",
            "O porte do evento está classificado como: ", Evento);
    
}

else if (Quan_Convidados > 100 && Quan_Convidados <= 200) {
    let Evento = "Evento médio";

    console.log("No evento, teremos:",
         Carne_da_festa_em_kg,"kg de carne;",
          latas_reservas, "latas de refrigerante;",
           doces, "doces;",
            "O porte do evento está classificado como: ", Evento);

}

else {
    let Evento = "Evento grande";

    console.log("No evento, teremos:",
         Carne_da_festa_em_kg,"kg de carne;",
          latas_reservas, "latas de refrigerante;",
           doces, "doces;",
            "O porte do evento está classificado como: ", Evento);

}
