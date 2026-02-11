function Inicializa(){
    let Receita = {
        titulo: "Bolo de Fuba",
        tempoPreparo: 40,
        Dificuldade: "FÁCIL",
        Ingredientes: [
            "3 ovos", 
            "2 xicaras de açucar",
            "2 xicaras de fuba", 
            "3 colheres rasas de farinha de trigo",
            "1 copo de leite",
            "1/2 copo de oleo",
            "1 colher de fermento em pó"]
    }
    let tempoH = Receita.tempoPreparo
    let min
        
        min = Receita.tempoPreparo % 60
        tempoH = Math.trunc(tempoH/60)
        

    let estilo = {
        margin: "50px auto",
        textAlign: "center",
        border: "2px solid black",
        width: "280px",
        padding: "20px",
        borderRadius: "10px"
    }
    let letra ={
        color: "green"
    }
    return(
        <>
        <h1>Exercicio 2: Card de Receita (Intermediário)</h1>
        <div style = {estilo}>
            <h2>{Receita.titulo}</h2>
            <p style = {letra}>dificuladade: {Receita.Dificuldade}</p>
            <p>Tempo de preparo: {tempoH} horas e {min} minutos</p>
            <ul>
                <li>{Receita.Ingredientes[1]}</li>
                <li>{Receita.Ingredientes[2]}</li>
                <li>{Receita.Ingredientes[3]}</li>
                <li>{Receita.Ingredientes[4]}</li>
                <li>{Receita.Ingredientes[5]}</li>
                <li>{Receita.Ingredientes[6]}</li>
                <li>{Receita.Ingredientes[0]}</li>
            </ul> 
        </div>
        </>
    
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Inicializa />);