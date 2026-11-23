/*Uma academia deseja oferecer um desconto na mensalidade com base em alguns critérios.
Regras:- O valor da mensalidade é R$ 150,00.- Se o aluno tiver mais de 60 anos,
ele recebe 30% de desconto.- Se o aluno tiver entre 18 e 59 anos e treinar mais de 4 vezes por semana,
recebe 10% de desconto.- Menores de 18 anos não têm desconto.
*/
let aluno = 25
let valor = 150
let disconto = ""

if (aluno >= 60) {
   disconto = (valor / 30)
} else if (aluno >=18) {
   disconto = (valor / 10)
} else {
   disconto = "Sem disconto"
}
console.log (aluno, disconto)