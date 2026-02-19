import { useEffect } from "react";
import { useState } from "react";

function Clean(){
    const [count,setCount] = useState(0);
    useEffect(() => {
        let timer = setTimeout(() => {
        setCount(count + 1);
        }, 1000);
        return () => clearTimeout(timer)
    }, []);
    

    return(
        <>
        <p>I've rendered {count} timer!</p>
        </>
    )
}
export default Clean;