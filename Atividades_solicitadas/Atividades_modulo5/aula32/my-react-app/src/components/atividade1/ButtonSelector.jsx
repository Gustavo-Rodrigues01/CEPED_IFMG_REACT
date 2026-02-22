import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function ButtonSelector(){
    const {theme,themeButton, toggleTheme} = useContext(ThemeContext);
    return(
        <div className={theme}>
            <button
                className={themeButton}
                onClick={()=>toggleTheme()} 
                
            >select theme</button>
        </div>
    )
}
export default ButtonSelector;