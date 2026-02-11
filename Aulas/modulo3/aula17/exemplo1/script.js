class Pessoa{
    #nome;
    constructor(nome){
        this.#nome = nome;
    }
    #formatarNome(){
        return this.#nome+"!";
    };
    nomeFormatado(){
        return this.#formatarNome();
    }
}

let p1 = new Pessoa("Gustavo");

console.log(p1.nomeFormatado());