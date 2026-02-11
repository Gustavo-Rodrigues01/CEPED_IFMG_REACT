class ContaBancaria {
    #saldo;#nomeTitular;#historicoEntradas;#historicoSaidas;
    constructor(nomeTitular, saldo) {
        this.#nomeTitular = nomeTitular;
        this.#saldo = saldo;
        this.#historicoEntradas = [];
        this.#historicoSaidas = [];
    }

    get nome() { return this.#nomeTitular; }
    get saldo() { return this.#saldo; }

    sacarValor(saque) {
        try {
            if (typeof saque !== "number" || saque <= 0) {
                throw new ValorInvalidoError();
            }

            if (saque > this.#saldo) {
                throw new SaldoInsuficienteError();
            }

            this.#saldo -= saque;
            this.#historicoSaidas.push(saque);

        } catch (erro) {
            console.log(`${erro.name}: ${erro.message}`);
        }
    }

    depositarValor(deposito) {
        try {
            if (typeof deposito !== "number" || deposito <= 0) {
                throw new ValorInvalidoError();
            }

            this.#saldo += deposito;
            this.#historicoEntradas.push(deposito);

        } catch (erro) {
            console.log(`${erro.name}: ${erro.message}`);
        }
    }

    apresentarHE() {
        console.log("Entradas  x  Valores");
        for (let i = 0; i < this.#historicoEntradas.length; i++) {
            console.log(`${i + 1}º     ${this.#historicoEntradas[i]}`);
        }
    }

    apresentarHS() {
        console.log("Saídas  x  Valores");
        for (let i = 0; i < this.#historicoSaidas.length; i++) {
            console.log(`${i + 1}º     ${this.#historicoSaidas[i]}`);
        }
    }
}
let Nubank = new ContaBancaria("Gustavo Rodrigues", 2000);
console.log(Nubank.saldo);
Nubank.depositarValor(1000);
console.log(Nubank.saldo);
Nubank.depositarValor(1000);
console.log(Nubank.saldo);
Nubank.sacarValor(500);
Nubank.sacarValor(500);
console.log(Nubank.saldo);
Nubank.apresentarHE();
console.log("---------------------------------")
Nubank.apresentarHS();
Nubank.sacarValor(3400);
Nubank.sacarValor(500);
Nubank.apresentarHS();
