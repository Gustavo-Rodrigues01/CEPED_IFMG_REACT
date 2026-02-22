import { useState, createContext} from "react";
import styles from "./Theme.module.css"

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(styles.light);
  const [themeButton, setThemeButton] = useState(styles.darkButton);

  function toggleTheme(){
        if(theme === styles.light && themeButton === styles.darkButton){
            setTheme(styles.dark);
            setThemeButton(styles.lightButton)
        }
        else{
            setTheme(styles.light);
            setThemeButton(styles.darkButton)
        }
    };

    return(
        <ThemeContext.Provider value={{theme,themeButton ,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
