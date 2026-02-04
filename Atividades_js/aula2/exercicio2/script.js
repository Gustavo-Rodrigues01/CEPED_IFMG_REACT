console.log("EXERCICIO 2:")

const nomeUsuario = "Gustavo"
let idadeUsuario = 18
const emaiUsuario = "gustavo@gmail.com"
let statusAtivo = "inativo"
numeroLogins = 0
let loop = 0
while (loop != -1){
    console.log("Menu login:")
    loop = Number(prompt("(1) fazer login, (-1) sair do aplicativo"))

    if(loop == 1){
        let loop2 = 0
        numeroLogins++
        statusAtivo = "ativo"
        while(loop2 != -1){
        loop2 = Number(prompt("(-1) para sair da conta, (1) status da conta"))
        if (loop2 == 1){
            console.log(`numero de logins: ${numeroLogins}`)
            console.log(`status de atividade: ${statusAtivo}`)
        }
        }
    statusAtivo = "inativo"
    }
}