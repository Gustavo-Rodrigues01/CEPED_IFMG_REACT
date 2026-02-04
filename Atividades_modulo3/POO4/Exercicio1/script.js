class Pessoa{
    #nome;#cpf;#endereço
    constructor(nome,cpf,logradouro,numero,bairro,cidade,estado,cep){
        this.#nome = nome
        this.#cpf = cpf;
        this.#endereço = new Endereço(logradouro,numero,bairro,cidade,estado,cep)
    }
    get nome(){return this.#nome}
    get cpf(){return this.#cpf}
    get endereço(){return this.#endereço.endereço}
}
class Endereço{
    #logradouro; #numero; #bairro; #cidade; #estado; #cep;
    constructor(logradouro,numero,bairro,cidade,estado,cep){
        this.#logradouro = logradouro;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#cep = cep;
    }
    get endereço(){ return( 
`Logradouro:${this.#logradouro}
Numero:${this.#numero}
Bairro:${this.#bairro}
Cidade:${this.#cidade}
Estado:${this.#estado}
CEP:${this.#cep}`)}
}

let objetoPessoa = new Pessoa("Gustavo","119.876.145-76","Rua alexandre herculano", "142","Vista Alegre","Ibirite","MG","234567")
console.log(objetoPessoa.nome)
console.log(objetoPessoa.cpf)
console.log(objetoPessoa.endereço)