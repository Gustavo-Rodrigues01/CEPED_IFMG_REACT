import { useState, createContext} from "react";
import { useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [dark, setDark] = useState(false)
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);


    function toogleTheme(){
        setDark(!dark)
        }
    return(
        <ThemeContext.Provider value={{dark, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
