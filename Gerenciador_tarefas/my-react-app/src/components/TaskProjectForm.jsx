import { ProjectContext } from "../Context/ProjectContext";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import TaskProject from "./TaskProject";

function TaskProjectForm() {
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const { tasksProjectsAdd } = useContext(ProjectContext);

  function handleAdd() {
    if (title.trim() !== "") {
      tasksProjectsAdd(id, title);
      setTitle("");
    }
  }

  return (
    <div className="space-y-2">
      <div className="bg-blue-300 dark:bg-blue-900 text-black dark:text-white rounded-2xl flex flex-col p-4 space-y-2">
        <h1 className="text-3xl text-center">Task project form</h1>

        <div className="flex space-x-2">
          <input
            className="bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-full p-2"
            type="text"
            placeholder="add new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />

          <button
            onClick={handleAdd}
            className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-md w-[75px] h-[40px] shadow"
          >
            Add
          </button>
        </div>
      </div>

      <TaskProject />
    </div>
  );
}

export default TaskProjectForm;