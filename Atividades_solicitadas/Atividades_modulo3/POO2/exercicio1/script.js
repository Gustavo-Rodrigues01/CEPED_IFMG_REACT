class ContaBanco {
    #nomeTitular; #saldo; #historicoEntradas; #historicoSaidas
    constructor(nomeTitular,saldo){
        this.#nomeTitular = nomeTitular
        this.#saldo = saldo
        this.#historicoEntradas = 0
        this.#historicoSaidas = 0
    }
    depositar(){
        let valor = Number(prompt("Entre com um valor:"))
        this.#saldo += valor
        this.#historicoEntradas += valor
    }
    sacar(){
        let valor = Number(prompt("entre com o valor que deseja retirar:"))
        if(valor <= this.#saldo){
        this.#saldo -= valor
        this.#historicoSaidas += valor
        }
        else{
            "saldo insuficiente"
        }
    }
    getHistoricoEntradas(){
        return `O valor total das entradas é de ${this.#historicoEntradas}`
    }
    getHistoricoSaidas(){
        return `O valor total de saidas foram de ${this.#historicoSaidas}`
    }
    getSaldo(){
        return `Saldo total: ${this.#saldo}`
    }
    getNomeTitular(){
        return this.#nomeTitular
    }

}

let nubank = new ContaBanco("Gerente",1000)

nubank.depositar()
console.log(nubank.getSaldo())
nubank.sacar()
console.log(nubank.getSaldo())
console.log(nubank.getHistoricoEntradas())
console.log(nubank.getHistoricoSaidas())
console.log(nubank.getNomeTitular())
