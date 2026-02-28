import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import { Check, Trash2 } from "lucide-react";

function TaskProject() {
  const { id } = useParams();
  const {
    tasksProject,
    tasksProjectsdelet,
    ProjectTaskComplet,
    tasksLinkReturn
  } = useContext(ProjectContext);

  return (
    <div className="space-y-2">
      <div className="text-3xl w-500px bg-blue-300 dark:bg-blue-900 text-black dark:text-white flex flex-col p-4 space-y-2 rounded-lg">
        {tasksProject
          .filter(task => task.idProject === id)
          .map(task => (
            <div key={task.id} className="flex items-center gap-2">
              <p
                className={`text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md ${
                  task.isCompleted ? "line-through text-gray-400" : ""}`}>
                  {task.title}
              </p>

              <button
                onClick={() => ProjectTaskComplet(task.id)}
                className="bg-white dark:bg-gray-900 text-black-600 rounded-md w-[60px] h-[50px] flex items-center justify-center"
              ><Check color="green" size={25} /></button>

              <button
                onClick={() => tasksProjectsdelet(task.id)}
                className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
              ><Trash2 color="red" size={25} /></button>
            </div>
          ))}
      </div>
        <div className="w-full flex justify-end p-3">
            <button 
            onClick={()=>{tasksLinkReturn()}}
            className="bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-[100px] h-[40px] shadow"
            >Back</button>
        </div>
      </div>
      
  );
}

export default TaskProject;