import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { Trash2, Check } from "lucide-react";
import { useState } from "react";

function TaskItem({ taskId, tasksIsCompleted, tasksTitle, taskDescription, taskCategory }) {
  const { taskComplet, taskDelet } = useContext(TasksContext);
  const [description, setDescription] = useState(false)

  function showDescription() {
    setDescription(!description)
  }

  return (
    <div>
      <div className="flex items-center space-x-2">
        <button
          className={`text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md items-start ${
          tasksIsCompleted ? "line-through text-gray-400" : ""}`}
          onClick={() => {showDescription()}}
        >{tasksTitle}</button>
       <button
          onClick={() => taskComplet(taskId)}
          className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
        ><Check color="green" size={30} /></button>

        <button
          onClick={() => taskDelet(taskId)}
          className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
        ><Trash2 color="red" size={30} /></button>
      </div>
      {description && (
        <div
          className="bg-white dark:bg-gray-800 rounded-md p-2 shadow"
        >
          <p className="text-sm">Category: {taskCategory}</p>
          <p className="text-sm">Description: {taskDescription}</p>
        </div>
             )}
    </div>
    
  );
}

export default TaskItem;