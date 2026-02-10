let estaLogado = true;
let ehAdmin = true;

if(estaLogado && ehAdmin){
    console.log("Acesso de ADM concedido")
}
else if(estaLogado){
    console.log("Acesso concedido")
}
else{
    console.log("Você precisa estar logado")
}