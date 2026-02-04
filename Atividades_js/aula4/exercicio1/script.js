//GERADOR DE TABUADA 
 let numero, resultado

 numero = Number(prompt("Informe um numero para gerar a tabuada: "))
 for(let i = 0; i < 10; i++){
     resultado = numero * i
     console.log(`${numero} x ${i} = ${resultado}`)
 }