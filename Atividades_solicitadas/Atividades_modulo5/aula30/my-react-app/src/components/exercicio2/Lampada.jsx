import { useState } from "react";
import styles from "./Lampada.module.css";
function Lampada(){
    const [state, setState] = useState("on");
    const [lampada, setLampada] = useState(styles.acesa);

    const toggleState = () => {
        if(state === "on"){
            setState("off");
            setLampada(styles.apagada);
        }
        else{
            setState("on");
            setLampada(styles.acesa);
        };
    };
    
    return(
        <div>
            <div className={lampada}></div>
            <button onClick={toggleState}>{state}</button>
        </div>
    );
};

export default Lampada;