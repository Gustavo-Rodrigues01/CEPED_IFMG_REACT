import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { ThemeContext } from "../Context/themeContext";
import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#AAA',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Header(){
     const {numIncomplet} = useContext(TasksContext);
     const {toogleTheme} = useContext(ThemeContext)

    return(
        <div className="bg-blue-300 dark:bg-blue-900
            text-black dark:text-white
            flex 
            flex-row 
            p-4 
            space-y-2
            justify-between
            "
        >
            <p>Status Header:{numIncomplet} pending</p>
            <nav>
                      <NavLink style={navLinkStyles} to="/">Home</NavLink>|{" "}
                      <NavLink style={navLinkStyles} to="/Project">Projects</NavLink>|{" "}
                      <NavLink style={navLinkStyles} to="/Historic">HistoricTasks</NavLink>|{" "}
                      <NavLink style={navLinkStyles} to="/About">About</NavLink>
                    </nav>
            <button 
                className="bg-purple-700 dark:bg-yellow-400 text-white dark:text-black rounded-2xl w-20 h-7"
                onClick={toogleTheme}
            >dark/light</button>
        </div>
    )
}
export default Header;