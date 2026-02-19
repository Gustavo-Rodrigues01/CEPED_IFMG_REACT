import { useState,useEffect } from "react";

function FormularioDebounce(){

    const [email,setEmail] = useState("")
    const [isValid,setIsvalid] = useState(false)


    useEffect(()=>{
        const timer = setTimeout(()=>{
        
            if(email.includes("@") && email.includes(".")){
                setIsvalid(true)
            }
            else{
                setIsvalid(false)
            }
        },500);
        return ()=>{
            clearTimeout(timer)
        };
    },[email]);

    return(
        <>
            <p>Email</p>
            <input
                placeholder="endereço deve conter @ e ."
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
            />
            {isValid && <p>Endereço valido</p>}
            {!isValid && <p>Endereço invalido</p>}
        </>
    );
};
export default FormularioDebounce;