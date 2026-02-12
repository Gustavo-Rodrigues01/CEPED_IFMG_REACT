//O objeto props pode ter qualquer nome e não apenas props
function Car(props){

    return(
        <>
            {/*Props */}
            <h1>Exemplo1</h1>
            <h2>I am a {props.brand}!</h2>

            {/*props de multiplos elementos */}
            <h1>Exemplo2</h1>
            <h2>I am a {props.color} {props.brand} {props.model}</h2>

            <h1>Exemplo3</h1>
            <h2>I am a {props.color} {props.brand} {props.model} {props.year}</h2>
        </>
        
    );
};

export default Car;