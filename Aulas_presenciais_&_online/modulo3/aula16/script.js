class Pessoa {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    };
};
let p1 = new Pessoa("Ana", 30);
let p2 = new Pessoa("Bia", 30);

console.log(`${p1.nome} => ${p1.idade}`);
console.log(`${p2.nome} => ${p2.idade}`);