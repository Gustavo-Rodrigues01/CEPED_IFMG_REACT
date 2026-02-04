function Card(props){ 
  
  return (
    <div className="body">
      <h1>{props.titulo}</h1>

      <div className="container">
        <img src={props.imagem} className="imagem" alt={props.nome} />
        <h2>{props.nome}</h2>
        <p className="texto">{props.descricao}</p>
      </div>
    </div>
  );
};

export default Card;