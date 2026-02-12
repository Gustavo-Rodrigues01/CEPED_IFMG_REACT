import { useState } from "react";

function FavoriteColor(){
    const [color,setColor] = useState("blue");

    return(
        <>
            <h2>{color}</h2>
            <button onClick={() => setColor("red")}>red!</button>
            <button onClick={() => setColor("blue")}>blue!</button>
        </>
    );
};

export default FavoriteColor;