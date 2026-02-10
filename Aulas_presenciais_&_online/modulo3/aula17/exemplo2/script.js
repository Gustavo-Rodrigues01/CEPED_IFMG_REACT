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
    get nome(){
        return this.#nome;
    };
    set nome(valor){
        this.#nome = valor;
    }
}

let p1 = new Pessoa("Gustavo");

console.log(p1.nomeFormatado());
console.log(p1.nome)
p1.nome = "Felipe"
console.log(p1.nome)