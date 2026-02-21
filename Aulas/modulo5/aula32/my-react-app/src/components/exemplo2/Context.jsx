import { useState, createContext, useContext } from "react";
import Context2 from "./Context2";

export const UserContext = createContext();

function Context(){
    const [user, setUser] = useState("Linus");

    return(
        <>
            <UserContext.Provider value={user}>
                <p>{`Hello ${user}!`}</p>
                <Context2/>
            </UserContext.Provider>
        </>
    );
}
export default Context;