//CALCULADORA MEDIA ESCOLAR
 let nota1, nota2, nota3, mediaNota

 nota1 = Number(prompt("Insira a nota 1: "))
 nota2 = Number(prompt("Insira a nota 2: "))
 nota3 = Number(prompt("Insira a nota 3: "))

 mediaNota = (nota1+nota2+nota3)/3

 if(mediaNota >= 7){
     console.log("Aluno aprovado")

 }
 else if(mediaNota >= 5){
     console.log("Aluno de recuperação")
 }
 else{
     console.log("Aluno reprovado")
 }