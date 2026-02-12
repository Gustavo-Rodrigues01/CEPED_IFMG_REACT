import { useState } from "react";
import styles from "./UseCard.module.css";

function UserCard({nome, cargo, foto}){
    const [state, setState] = useState("off");
    let circle_color

    const toggleState = () => {
        if(state === "off"){
            setState("on")
        }
        else{
            setState("off")
        };
    };

    if (state === "on"){
        circle_color = styles.circle_green
    }
    else{
        circle_color = styles.circle_gray
    }

    return(
        <div className={styles.countainer}>
            <img src={foto} className={styles.img}/>
            <p>Nome: {nome}</p>
            <p>cargo: {cargo}</p>
            <div className={styles.status}>
                <div className={circle_color}></div>
                <p>{state}</p>
            </div>
            <button onClick={toggleState}>{state}</button>
        </div>
    );
};

export default UserCard;