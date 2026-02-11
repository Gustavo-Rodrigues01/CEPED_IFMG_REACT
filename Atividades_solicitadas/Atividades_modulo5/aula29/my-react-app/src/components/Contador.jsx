
import { useState } from "react";
function Contador(){
    const [contador, setContador] = useState(0);
    
    return(
        <>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>clique aqui!</button>
        </>
         

    )
}
export default Contador;