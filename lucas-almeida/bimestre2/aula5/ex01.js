/*.desenvolver um progrma que valide o login de um usuario.SE o usuario digitar no
login:admin e na senha 1234,vai mostrar na tela :"usuario logado com sucesso !",
caso contrario,aparecera a mensagem:"acesso negado!".
*/

let loginV =admin;
let login=lucas;
let senhaV=1234;
let senha = 4554;

if(login===admin){
    if(senha===1234){
        console.log("usuario logado com sucesso !")
    }
    else if(senhaV!==senha)
        console.log("acesso negado!")
}
 else if (loginV!==login){
    console.log("acesso negado!")
}
