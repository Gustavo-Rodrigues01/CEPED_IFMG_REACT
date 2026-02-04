const Card = ({titulo, nome, imagem, descricao}) => {

    return(
        <div className="body">
            <h1>{titulo}</h1>
            <div className="countainer">
                <img src={imagem} className = "imagem"></img>
                <h1>{nome}</h1>
                <p className="texto">{descricao}</p>
            </div>
        </div>
    
);
};
    ReactDOM.render(<Card />, document.getElementById('root'));

function App(){

    return(
        <Card
            titulo="Card de produto"
            nome="YouTube"
            imagem="youtube.jpg"
            descricao="O YouTube é a maior plataforma de compartilhamento de vídeos do mundo."
        />
    );
   
};
ReactDOM.render(<App />, document.getElementById('root'));
