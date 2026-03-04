import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="text-3xl bg-blue-300 dark:bg-blue-900 text-black dark:text-white flex flex-col p-4 space-y-2 rounded-lg">
      <h1 className="text-center">Daily tasks</h1>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            taskId={task.id}
            tasksIsCompleted={task.isCompleted}
            taskDescription={task.description}
            taskCategory={task.category}
            tasksTitle={task.title}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;