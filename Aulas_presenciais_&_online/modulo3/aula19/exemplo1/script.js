class Empresa{
    #nome;
    constructor(nome){
        this.#nome = nome;
    };
    get nome(){return this.#nome};
};

class Empregado{
    #nome;#empresa;
    constructor(nome,empresa){
        this.#nome = nome;
        this.#empresa = empresa;
    };
    info(){
        console.log(`${this.#nome} trabalha na empresa ${this.#empresa.nome}.`);
    };
};
let empresa = new Empresa("Vallourec");
let empregado = new Empregado("Gustavo", empresa);
empregado.info();