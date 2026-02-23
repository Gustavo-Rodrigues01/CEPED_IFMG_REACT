import { useState } from "react";
import { useContext } from "react";
import { TasksContext } from "./TasksContext";

function TaskForm(){
    const [title, setTitle] = useState("")
    const {taskAdd} = useContext(TasksContext);

    return(
        <div>
            <div className="bg-blue-200 dark:bg-blue-900 text-black dark:text-white rounded-2xl flex flex-col p-4 space-y-2">
                <h1 className="text-3xl text-center">Task form</h1>
                <div className="flex space-x-2">
                
                    <input 
                        className="bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-full p-2" 
                        type="text" 
                        placeholder="add new task"
                        value={title}
                        onChange={(event)=> setTitle(event.target.value)}
                        onKeyDown={(e)=>{if(e.key==="Enter" && title.trim() != ""){
                        taskAdd(title);
                        setTitle("");
                    }}}
                    />

                    <button 
                        onClick={()=> {if(title.trim() != ""){
                        taskAdd(title);
                        setTitle("");
                        }}} 
                        className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-md w-[75px] h-[40px] shadow"
                    >Add</button>
                </div>

            </div>
        </div>
        
    )
}
export default TaskForm