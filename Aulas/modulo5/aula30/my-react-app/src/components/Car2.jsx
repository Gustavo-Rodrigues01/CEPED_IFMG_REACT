 
function Car2(props){

    return(
        <>
            {/*Props com objetos e arrays*/}
            <h1>Exemplo4</h1>
            <h2>I am a {props.carInfo.name} {props.carInfo.model} {props.years[1]}</h2>
        </>
        
    );
};

export default Car2;