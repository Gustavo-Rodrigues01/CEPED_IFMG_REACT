contaBancaria = {
    //propriedades
    titular: "Gustavo Rodrigues",
    saldo: 1000,
    //metodos
    depositar: function(deposito){
        this.saldo += deposito
        return this.saldo
    },
    retirar: function(retirada){
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
console.log("deposito de 500:")
contaBancaria.depositar(500)
contaBancaria.exibirSaldo()
console.log("retirada de 200:")
contaBancaria.retirar(200)
contaBancaria.exibirSaldo()
console.log("retirada de 1000:")
contaBancaria.retirar(1000)
contaBancaria.exibirSaldo()