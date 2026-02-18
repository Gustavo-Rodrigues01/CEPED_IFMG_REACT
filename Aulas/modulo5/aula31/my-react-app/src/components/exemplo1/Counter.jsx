import { useEffect, useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=> count+1);
        }, 1000);
    },[]);

    return(
        <>
            <p>I've rendered {count} times!</p>
        </>
    )
}

export default Counter;