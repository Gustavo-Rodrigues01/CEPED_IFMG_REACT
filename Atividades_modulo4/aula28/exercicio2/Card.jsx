const Body = styled.div`
    width: 100%;
    text-align: center;
`
const Countainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    text-align: center;
    justify-content: center;
    background-color: gray;
    border-radius: 10px;
    box-shadow: 5px 5px 10px;
    transition: 0.3s ease-out;
    cursor: pointer;
    margin:0 auto;

    &:hover{
    background-color: rgb(116, 116, 116);
    transform:scale(1.02);
}
`
const Imagem = styled.img`
    border-radius: 5px;
    margin: 25px;
`
const Texto = styled.p`
    color: white;
    text-align: justify;
    margin: 25px;
    font-weight: 300;
    font-size:medium;
`
const Card = () => {

    return(
        <Body>
            <h1>Card de produto</h1>
            <Countainer>
                <Imagem src="youtube.jpg" className = "imagem"></Imagem>
                <h1>Youtube</h1>
                <Texto className="texto">O YouTube é a maior plataforma de compartilhamento de vídeos do mundo, criada em 2005 e adquirida pelo Google em 2006. </Texto>
            </Countainer>
        </Body>
    
);
};
    ReactDOM.render(<Card />, document.getElementById('root'));