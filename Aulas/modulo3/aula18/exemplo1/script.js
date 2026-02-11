class Pessoa{
    #nome;
    constructor(nome){
        this.#nome = nome;
    };
    get nome(){return this.#nome;};
};
class Aluno extends Pessoa{
    #turma;
    constructor(nome,turma){
        super(nome);
        this.#turma = turma;
    };
    get turma(){return this.#turma}
};

let pessoa = new Pessoa("Paulo");
let aluno = new Aluno("Lucas","Ceped-react")

console.log(pessoa.nome);
console.log(aluno.turma);
console.log(aluno.nome);