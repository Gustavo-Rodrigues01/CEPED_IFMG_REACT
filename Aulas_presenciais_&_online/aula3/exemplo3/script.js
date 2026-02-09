let operacao
let num1
let num2
let resultado = 0

console.log("Informe a operação desejada:")
console.log("1___soma")
console.log("2___subtração")
console.log("1___multiplicação")
console.log("1___divisão")

operacao = Number(prompt("entre com a operação:"))
num1 = Number(prompt("entre com o primeiro numero:"))
num2 = Number(prompt("entre com o segundo numero:"))
if(operacao == 1){
    resultado = num1+num2
}
else if(operacao == 2){
    resultado = num1-num2
}
else if(operacao === 3){
    resultado = num1*num2
}
else(
    resultado = num1/num2
)
console.log(`O resultado da operação é: ${resultado}`)