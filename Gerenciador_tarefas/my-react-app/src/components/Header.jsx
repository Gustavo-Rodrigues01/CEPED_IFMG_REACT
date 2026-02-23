import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { ThemeContext } from "../Context/themeContext";
function Header(){
     const {numIncomplet} = useContext(TasksContext);
     const {toogleTheme} = useContext(ThemeContext)
    return(
        <div className="bg-blue-200 dark:bg-blue-900
            text-black dark:text-white
            flex 
            flex-row 
            p-4 
            space-y-2
            justify-evenly
            "
        >
            <p>Status Header:{numIncomplet} pending</p>
            <button 
                className="bg-purple-700 dark:bg-yellow-400 text-white dark:text-black rounded-2xl w-20 h-7"
                onClick={toogleTheme}
            >dark/light</button>
        </div>
    )
}
export default Header;