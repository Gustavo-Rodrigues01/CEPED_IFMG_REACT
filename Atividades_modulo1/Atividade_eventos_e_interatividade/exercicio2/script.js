const nome = document.getElementById("nome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const confirmaSenha = document.getElementById("confirmaSenha")
let i = 0
function cadastrar(){
        i = 0
        const nome1 = nome.value.trim()
        const email1 = email.value.trim()
        const senha1 = senha.value.trim()
        const confirmaSenha1 = confirmaSenha.value.trim()
        if(nome1.length < 3){
            alert("Nome invalido(Muito pequeno)!")
            i++
        }
        if(email1.includes("@") == false || email1.includes(".") == false){
            alert("email invalido(não contem os caracteres (@) e (.))!")
            i++
        }
        if(senha1.includes("0"||"1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9") !== true || senha1.length < 6){
            alert("senha muito pequena ou sem numeros")
            i++
        }
        if(senha1 !== confirmaSenha1){
            alert("senhas não são iguais!")
            i++
        }
        if(i == 0){
        alert("cadastro realizado com sucesso")
        }
}
