const prompt=require("prompt-sync")();

let login= prompt("Insira seu nome de usuário:");
let senha= Number(prompt("Insira sua senha:"));    

if (login=== "Admin" && senha=== 1234) {

    console.log("Usuário logado com Sucesso!!")
    
} else {

    console.log("Acesso Negado.")

}
