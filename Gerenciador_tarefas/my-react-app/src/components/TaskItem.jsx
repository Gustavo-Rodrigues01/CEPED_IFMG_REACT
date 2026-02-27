import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { Trash2, Check } from "lucide-react";

function TaskItem({ taskId, tasksIsCompleted, tasksTitle }) {
  const { taskComplet, taskDelet } = useContext(TasksContext);

  return (
    <div className="flex items-center space-x-2">
      <p
        className={`text-2xl w-full bg-white dark:bg-gray-700 p-2 rounded-md ${
          tasksIsCompleted ? "line-through" : ""
        }`}
      >
        {tasksTitle}
      </p>

      <button
        onClick={() => taskComplet(taskId)}
        className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
      >
        <Check color="green" size={30} />
      </button>

      <button
        onClick={() => taskDelet(taskId)}
        className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
      >
        <Trash2 color="red" size={30} />
      </button>
    </div>
  );
}

export default TaskItem;