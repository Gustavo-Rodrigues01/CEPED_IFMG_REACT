import { useState, createContext} from "react";
import { useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [dark, setDark] = useState(() => {
        try {
            const storedTheme = localStorage.getItem("dark");
            return storedTheme ? JSON.parse(storedTheme) : false;
        } catch {
            return false;
        }
    });
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);
    useEffect(()=>{
        localStorage.setItem("dark", JSON.stringify(dark));
    },[dark]);


    function toogleTheme(){
        setDark(!dark)
        }
    return(
        <ThemeContext.Provider value={{dark, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
