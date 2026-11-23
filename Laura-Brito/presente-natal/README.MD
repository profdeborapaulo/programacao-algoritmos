# 🎄 Árvore de Natal em JavaScript
 
Este projeto demonstra a utilização de estruturas de repetição (`for`) e lógica de programação para desenhar uma árvore de Natal no console utilizando JavaScript.
 
## 📋 Descrição
 
O programa gera uma árvore de Natal composta por caracteres `*` (asteriscos). A construção da árvore é feita de forma lógica, controlando:
 
- A quantidade de linhas da árvore.
- Os espaços antes das estrelas para centralização.
- A quantidade de estrelas exibidas em cada linha.
 
O projeto é ideal para praticar:
 
- Variáveis
- Estruturas de repetição (`for`)
- Operações matemáticas
- Construção de padrões no console
- Lógica de programação
 
---
 
## 🚀 Código
 
```javascript
const altura = 10; // Altura da árvore
 
for (let i = 1; i <= altura; i++) {
    let linha = " ";
 
    // Adiciona espaços antes das estrelas
    for (let j = 1; j <= altura - i; j++) {
        linha += " ";
    }
 
    // Adiciona estrelas na linha
    for (let k = 1; k <= 2 * i - 1; k++) {
        linha += "*";
    }
 
    console.log(linha);
}
```
 
---
 
## 🧠 Como funciona
 
### 1. Definição da altura
 
```javascript
const altura = 10;
```
 
A variável `altura` determina quantas linhas a árvore terá.
 
---
 
### 2. Loop principal
 
```javascript
for (let i = 1; i <= altura; i++)
```
 
A variável `i` representa a linha atual da árvore.
 
---
 
### 3. Espaços antes das estrelas
 
```javascript
for (let j = 1; j <= altura - i; j++)
```
 
Adiciona espaços para centralizar a árvore.
 
Nas primeiras linhas existem mais espaços e, conforme descemos na árvore, a quantidade diminui.
 
---
 
### 4. Quantidade de estrelas
 
```javascript
for (let k = 1; k <= 2 * i - 1; k++)
```
 
A cada linha são adicionadas mais estrelas:
 
| Linha | Estrelas |
|---------|---------|
| 1 | 1 |
| 2 | 3 |
| 3 | 5 |
| 4 | 7 |
| ... | ... |
 
A fórmula utilizada é:
 
```javascript
2 * i - 1
```
 
Gerando a sequência dos números ímpares.
 
---
 
## 💻 Exemplo de Saída
 
```text
         *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*******************
```
 
---
 
## 📚 Conceitos Aplicados
 
- Variáveis
- Operadores matemáticos
- Loops aninhados
- Manipulação de strings
- Impressão de dados no console
- Lógica de padrões
 
---
 
## 🎯 Objetivo Educacional
 
Este exercício foi desenvolvido para demonstrar como a programação pode ser utilizada para criar padrões visuais através da lógica e das estruturas de repetição.
 
É uma excelente atividade para estudantes iniciantes que desejam praticar algoritmos e desenvolver raciocínio lógico.
 
---
 
## 👩‍🏫 Autoria
 
Projeto desenvolvido como atividade de aprendizagem de **Lógica de Programação com JavaScript**.
 
Orientação: **Prof.ª Débora Batista da Silva Paulo**
 
---
 
## 📄 Licença
 
Este projeto pode ser utilizado livremente para fins educacionais.
 