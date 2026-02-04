console.log("EXERCICIO 3:")

let operação, ladoA, ladoB, perimetro, raio, media
let num1, num2, num3, area
do{
    operação = Number(prompt("(1)area retangulo, (2)perimetro circulo,(3)media de 3 numeros, (-1)sair"))
    if(operação != -1){
        switch(operação){
            case 1:
                ladoA = Number(prompt("Informe a largura: "))
                ladoB = Number(prompt("Informe a altura: "))
                area = ladoA*ladoB
                console.log(`A area do retangulo é ${area} metros quadrados`)
                break
            case 2:
                raio = Number(prompt("informe o raio do circulo: "))
                perimetro = raio*2*3.14
                console.log(`O perimetro do circulo é: ${perimetro}`)
                break
            case 3:
                num1 = Number(prompt("informe o primeiro numero: "))
                num2 = Number(prompt("informe o segundo numero: "))
                num3 = Number(prompt("informe o terceiro numero: "))
                media = (num1 + num2 + num3)/3
                console.log(`A media é: ${media}`)
                break
        }
    }
}while(operação != -1)