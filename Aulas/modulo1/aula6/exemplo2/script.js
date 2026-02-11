//inicialização de objetos

//notação literal
const carro = {
    marca: "toyota",
    modelo: "corolla",
    ano: 2022,
    preço: 60000,
    ligado: false,
    ligar: function(){
        this.ligado = true;
        return 'carro ligado';
    }
};

//objeto vazio
const pessoa = new Object();
pessoa.nome = "joão";
pessoa.idade = 19;
pessoa.profissao = "Engenheiro";
pessoa.apresentar = function(){
    return `Ola, sou ${this.nome}`;
};

//acessando propriedades
console.log(carro.marca);
console.log(pessoa.nome);
console.log(pessoa['profissao']);

//mofificando e verificando propriedades
carro.preço = 58000;
console.log('marca' in carro);//true
console.log('limpo' in carro);//false

//arrays em objetos
const curso = {
    alunos: ["Bianca","Gustavo","Lucas","Marcos"],
    professor: ["Felipe"],
    modulos: ['fundamentos',' estruturas de dados'],
    adicionarAluno: function(nome){
        this.alunos.push(nome);
    },
    adicionarModulo: function(modulo){
        this.modulos.push(modulo);
    }
};
