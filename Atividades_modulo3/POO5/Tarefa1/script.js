

class ValoresInvalidosError extends Error {
    #name;#mensage
    constructor(message = "Valores inválidos!") {
        super(message);
        this.#name = "ValoresInvalidosError";
        this.#mensage = "O valor informado não é um numero"
    }
    get name(){return this.#name};
    get mensage(){return this.#mensage};
}

class DivisaoPorZeroError extends Error {
    #name;#mensage
    constructor(message = "Divisão por zero!") {
        super(message);
        this.#name = "DivisaoPorZeroError";
        this.#mensage = "O valor informado causa uma divisão por 0";
    }
    get name(){return this.#name};
    get mensage(){return this.#mensage};
}

try {
    let a = Number(prompt("digite o valor de a:  "));
    let b = Number(prompt("digite o valor de b:"));
    let resultado = a/b;
    if(isNaN(resultado)){
        throw new ValoresInvalidosError();
    }
    if (resultado == Infinity || resultado == -Infinity){
        throw new DivisaoPorZeroError("Divisão por zero!");
    }
    alert(resultado);
} catch(erro){
    console.log("Erro:" + erro.name);
    console.log("mensage:" + erro.mensage);
    console.log("Detalhe: "+ erro.message);
}