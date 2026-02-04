
const Card = () => {

    return(
        <div className="body">
            <h1>Card de produto</h1>
            <div className="countainer">
                <img src="youtube.jpg" className = "imagem"></img>
                <h1>Youtube</h1>
                <p className="texto">O YouTube é a maior plataforma de compartilhamento de vídeos do mundo, criada em 2005 e adquirida pelo Google em 2006. </p>
            </div>
        </div>
    
);
};
    ReactDOM.render(<Card />, document.getElementById('root'));