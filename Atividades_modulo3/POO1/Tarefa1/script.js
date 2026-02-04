contaBancaria = {
    //propriedades
    titular: "Gustavo Rodrigues",
    saldo: 1000,
    //metodos
    depositar: function(){
        let deposito = Number(prompt("Informe o valor a se depositar:"))
        this.saldo += deposito
        return this.saldo
    },
    retirar: function(){
        let retirada = Number(prompt("Informe o valor a se retirar:"))
        if(retirada > this.saldo){
            console.log("Saldo insuficiente")
        }
        else{
        this.saldo -= retirada
        return this.saldo
        }
    },
    exibirSaldo: function(){
        return console.log("saldo em conta:"+this.saldo)
    }
}
console.log("Saldo original:")
contaBancaria.exibirSaldo()
console.log("saldo apos deposito:")
contaBancaria.depositar()
contaBancaria.exibirSaldo()
console.log("Saldo apos retirada:")
contaBancaria.retirar()
contaBancaria.exibirSaldo()
