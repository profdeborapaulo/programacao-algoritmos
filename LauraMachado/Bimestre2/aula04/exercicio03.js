let renda = 5000
let financiamento = 120000
let meses = 240

let parcela = financiamento / meses
let limite = renda * 0.30

console.log("Valor máximo da parcela: R$ ", limite)
console.log("Valor da parcela: R$ ", parcela)

if (parcela <= limite) {
    console.log("APROVADO")
} else {
    console.log("REPROVADO")
}