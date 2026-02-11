//VERIFICADOR DE TRIANGULO
 let a, b, c

 a = Number(prompt("Informe o lado a: "))
 b = Number(prompt("Informe o lado b: "))
 c = Number(prompt("Informe o lado c: "))

 if(a+b > c & a+c > b & b+c > a){

     if(a == b & a == c & b == c){
         console.log("triangulo equilatero!")
     }
     else if(a == b || a == c || b == c){
         console.log("triangulo isoceles!")
     }
     else{
         console.log("triangulo escaleno!")
     }
 }
 else{
     console.log("Não forma um triangulo!")
 }