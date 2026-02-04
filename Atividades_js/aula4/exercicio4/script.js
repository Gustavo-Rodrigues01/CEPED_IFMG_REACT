//Media de alunos
 let nota = 0
 let media
 let somatorio = 0
 let divisor = 0

 while(nota != -1){
     nota = Number(prompt("informe a nota ou (-1)para finalizar: "))
     if(nota != -1){
         somatorio = somatorio + nota
         divisor++
     }
 }
 media = somatorio/divisor
 console.log(`A media das notas dos alunos foi ${media}`)