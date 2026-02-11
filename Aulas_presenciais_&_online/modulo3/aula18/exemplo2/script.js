class Animal{
    #nome; #som
    constructor(nome){
        this.#nome = nome;
        this.#som = "som_generico"
    };
    get nome(){return this.#nome}
    emitirSom(){
        return this.#som
    };
};
class Cachorro extends Animal{
    #som
    constructor(nome,som){
        super(nome);
        this.#som = som;
    };
    emitirSom(){return this.#som};
    emitirSomAntigo(){return super.emitirSom()};
};

let animal = new Animal("Baleia");
console.log(animal.nome);
console.log(animal.emitirSom())

let pincher = new Cachorro("trovão","morder moder");
console.log(pincher.nome);
console.log(pincher.emitirSom());
console.log(pincher.emitirSomAntigo());
