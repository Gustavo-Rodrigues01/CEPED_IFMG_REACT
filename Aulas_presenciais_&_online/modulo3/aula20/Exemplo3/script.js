try{
    let a = Number(prompt("digite o valor de a:"))
    let b = Number(prompt("digite o valor de b:"))
    let resultado = a/b
    if (isNaN(resultado)){
        throw new Error("Valores invalidos!")
    }
    if (resultado == Infinity || resultado == - Infinity){
        throw new Error("Divisão por zero!")
    }
    alert(resultado)
}catch (erro){
    console.log(`Erro: ${erro.name}`)
    console.log(`Detalhe: ${erro.message}`)
}