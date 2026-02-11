//SEQUENCIA DE FABONACCI

let num1= 0
let num2 = 1
let num3
let i = 0

while(i < 100){
    console.log(num1)
    console.log(num2)
    num3 = num1 + num2
    num1 = num2 + num3
    num2 = num3 + num1
    console.log(num3)
    console.log(num1)
    console.log(num2)
    i++
}