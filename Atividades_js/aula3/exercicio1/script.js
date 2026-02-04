//MINI CALCULADORA
let operação, num1, num2, soma, subtração, divisão, multiplicação

operação = Number(prompt("Digite (1)soma, (2)subtração, (3)multiplicação, (4)divisão, (-1)sair"))
do{
     switch(operação){
        case 1:
            num1 = Number(prompt("Informe um numero: "))
            num2 = Number(prompt("Informe um numero: "))
            soma = num1 + num2
            console.log(`O resultado da soma é: ${soma}`)
        break;
         case 2:
             num1 = Number(prompt("Informe um numero: "))
             num2 = Number(prompt("Informe um numero: "))
             subtração = num1 - num2
             console.log(`O resultado da subtração é: ${subtração}`)
             break;
         case 3:
             num1 = Number(prompt("Informe um numero: "))
             num2 = Number(prompt("Informe um numero: "))
             multiplicação = num1 * num2
             console.log(`O resultado da multiplicação é: ${multiplicação}`)
             break;
         case 4:
             num1 = Number(prompt("Informe um numero: "))
             num2 = Number(prompt("Informe um numero: "))
             divisão = num1 / num2
             console.log(`O resultado da divisão é: ${divisão}`)
             break;
         case -1:
             console.log("saindo da calculadora!")
             break;
         default:
             console.log("Opçcao invalida tente novamente!")
             break;
     }
      operação = Number(prompt("Digite (1)soma, (2)subtração, (3)multiplicação, (4)divisão, (-1)sair"))
 }while(operação != -1)