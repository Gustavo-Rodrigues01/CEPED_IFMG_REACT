function Profile(){
    const nome = "Artur Dias "
    const profissão = "Estudante de engenharia"
    const cidade = "Ibirite"
    const foto = "https://png.pngtree.com/png-vector/20240715/ourmid/pngtree-male-profile-icon-in-black-on-a-white-background-vector-png-image_7058986.png"

    const container2 = {
        margin: "50px auto",
        textAlign: "center",
        border: "2px solid black",     
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
    }
    const fotoContainer = {
        borderRadius: "50%",
        width: "120px",
        marginBottom: "10px"
    }
    return(
        <>
        <h1>Exercicio 1: componente de Perfil (Básico)</h1>
        <div style = {container2}>
            <img src = {foto} style = {fotoContainer}></img>
            <p>Nome completo: {nome}</p>
            <p>Profissão: {profissão}</p>
            <p>Cidade: Ibirité</p>
        </div>
        </>
    
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Profile />);