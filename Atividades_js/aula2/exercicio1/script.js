console.log("EXERCICIO 1:")
let saldo = 500
let mes = 1
while (mes <4) {
    if (mes == 2){
        saldo = saldo + 200 
    }
    if (mes == 3){
        saldo = saldo - 50
    }
    saldo = saldo + saldo*0.01
    mes++
}
console.log(`O saldo ao final do quarto mês sera de ${saldo}`)
