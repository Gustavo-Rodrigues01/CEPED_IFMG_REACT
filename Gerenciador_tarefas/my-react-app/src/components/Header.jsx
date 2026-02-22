import { useContext } from "react";
import { TasksContext } from "./TasksContext";
function Header(){
     const {numIncomplet} = useContext(TasksContext);
    return(
        <div className="bg-blue-300 
            flex 
            flex-row 
            p-4 
            space-y-2
            justify-evenly
            "
        >
            <p>Status Header:{numIncomplet} pending</p>
            <button className="bg-gray-400  rounded-2xl w-20 h-7">dark/light</button>
        </div>
    )
}
export default Header;