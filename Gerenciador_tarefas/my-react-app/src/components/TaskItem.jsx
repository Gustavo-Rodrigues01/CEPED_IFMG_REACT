import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { Trash2 } from "lucide-react";
import { Check } from "lucide-react";

function TaskItem(){    
    const {tasks, taskComplet, taskDelet} = useContext(TasksContext);
   return(
    <div className="text-3xl w-500px bg-blue-300 dark:bg-blue-900 text-black dark:text-white flex flex-col p-4 space-y-2 rounded-lg">
        <h1 className="text-center">Task List</h1>
        
        <div className="space-y-4">{tasks.map((tasks)=>(
        
        <div key={tasks.id} className="flex space-x-2">
            
            <p key={tasks.id} className={`text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md ${tasks.isCompleted && "line-through"}`}>{tasks.title}</p>
            <button onClick={() => taskComplet(tasks.id)} className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"><Check color="green" size={30}/></button>
            <button onClick={() => taskDelet(tasks.id)} className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"><Trash2 color="red"/></button>
        </div>
           ))}</div>
    </div>

 )
};
export default TaskItem;