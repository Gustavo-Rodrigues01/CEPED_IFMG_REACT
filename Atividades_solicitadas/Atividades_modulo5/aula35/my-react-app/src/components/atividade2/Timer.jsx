import { useState, useEffect } from "react";

function Timer({render}){
    const [seconds,setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev+1);
        }, 1000);
        return () => clearInterval(interval);
    },[])
    
    return render(seconds);
}
export default Timer