const Pessoa = {
    nome: "Gustavo",
    idade: "19",
    nascimento: "2007",
    profissao: "estudante"
};

function UserCard(){
    return(
    <>
        <h1>Apresenatação card</h1>
        <p>nome: {Pessoa.nome}</p>
        <p>idade {Pessoa.idade}</p>
        <p>nascimento: {Pessoa.nascimento}</p>
        <p>Profissao: {Pessoa.profissao}</p>
    </>
)};
ReactDOM.render(<UserCard />, document.getElementById('root'));