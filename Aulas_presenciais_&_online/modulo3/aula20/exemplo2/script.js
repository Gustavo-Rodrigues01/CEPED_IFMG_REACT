let nome = "Gustavo"
console.log("Inicio do programa");

try{
    console.log(nome)
}
catch(erro){
    console.log(`Ocorreu um erro de: ${erro.nome } ${erro.message}`)
} finally{
    console.log(`Fim do try-catch`)
}
console.log("Fim do programa");