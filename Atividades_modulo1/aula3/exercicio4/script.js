//MENU DE LOGIN

let usuario, senha,loginUsuario, loginSenha
let escolha = 0

usuario = prompt("informe o nome do usuario a ser cadastrado: ")
senha = prompt("informe a senha numerica: ")

while(escolha != -1){
    if(escolha == 1){
        loginUsuario = prompt("digite o nome de usuario: ")
        loginSenha = prompt("informe a senha cadastrada: ")

        if( loginUsuario == "admin" & loginSenha == "123456"){
            console.log("Login de admin concedido!")
        }
        else if(loginUsuario == usuario & loginSenha == senha){
            console.log("Login de usuario consedido!")
        }
        else{
            console.log("Acesso negado!")
        }
    }
    else{
        console.log("saindo do menu de login! ")
    }
    escolha = prompt("tecle (1) para login ou (-1) para sair: ")
}
console.log("encerrando programa")