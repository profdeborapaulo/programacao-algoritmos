let val_compra = 37.50
let desconto_apl = 18 /100
let val_perc = val_compra * desconto_apl
let val_final = val_compra - val_perc

console.log("Valor total da compra:", val_compra)
console.log("Percentual de desconto:", desconto_apl)
console.log("Valor do desconto:", val_perc)
console.log("Valor pago pelo cliente:", val_final)