class Departamento{
    #nome;
    constructor(nome){this.#nome = nome;};
    get nome(){return this.#nome;};
};

class Empresa{
    #nome;#departamentos;
    constructor(nome){
        this.#nome = nome;
        this.#departamentos = [];
    }
    get nome(){return this.#nome};
    get departamentos(){return this.#departamentos};
    adicionarDepartamento(departamento){ 
       this.#departamentos.push(departamento);
    }
    listarDepartamentos(){
            for(let i = 0; i<this.#departamentos.length;i++){
            console.log(this.#departamentos[i].nome);
        };  
    };
};

let objetoEmpresa = new Empresa("IFMG");
let Departamento1 = new Departamento("TI")
let Departamento2 = new Departamento("Doscentes")
let Departamento3 = new Departamento("Tecnico Administrativo")

objetoEmpresa.adicionarDepartamento(Departamento1)
objetoEmpresa.adicionarDepartamento(Departamento2)
objetoEmpresa.adicionarDepartamento(Departamento3)

objetoEmpresa.listarDepartamentos();

