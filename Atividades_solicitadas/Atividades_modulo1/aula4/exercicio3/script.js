//FATORIAL DE UM NUMERO
 let numero, fatorial, mostra
 let i
 numero = Number(prompt("Informe o numero para calcular o fatorial: "))
 mostra = numero
 i = numero
 while(i > 1){
     i = i-1
     console.log(i)
     numero = numero * i
     console.log(numero)
 }
 console.log(`${mostra}! = ${numero}`)
