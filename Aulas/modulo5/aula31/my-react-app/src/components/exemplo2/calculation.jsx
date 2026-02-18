import { useState } from "react";
import { useEffect } from "react";

function Calculation(){

    const [calculation, setCalculation] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(() => {setCalculation(() => count * 2);}, [count]); 

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
};

export default Calculation;