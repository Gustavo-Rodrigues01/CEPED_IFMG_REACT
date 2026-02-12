 //color="blue" define cor padrao caso não seja oferecida nenhuma outra posteriormente
//rest faz com que o numero de funções não se limite as que vc declarou
function Car3({color="blue", brand, model, ...rest}){
    
    return(
        <>
            {/*Props com objetos e arrays*/}
            <h1>Exemplo5</h1>
            <h2>My car is {color}</h2>

            <h1>Exemplo6</h1>
            <h2>I love my {brand} {model}</h2>

            <h1>Exemplo7</h1>
            <h2>My car is {rest.state}</h2>
        </>
        
    );
};

export default Car3;