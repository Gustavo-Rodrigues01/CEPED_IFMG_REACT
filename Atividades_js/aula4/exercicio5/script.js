//VALIDADOR DE NUMEROS PRIMOS

 let numero

 numero = Number(prompt("Informe o numero a se verificar: "))
 if(numero % 2 != 0 & numero % 3 != 0 & numero % 5 != 0 & numero % 7 != 0 ){
     console.log("este numero é primo")
 }
 else if(numero == 2 || numero == 3 || numero == 5 || numero == 7){
     console.log("este numero é primo")
 }
 else{
     console.log("este numero não é primo")
 }