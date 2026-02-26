import { useContext } from "react"
import { TasksContext } from "../Context/TasksContext"

function TasksComplet(){
    const { tasks } = useContext(TasksContext)

    return (
        <div className="text-3xl w-500px bg-blue-300 dark:bg-blue-900 text-black dark:text-white flex flex-col p-4 space-y-2 rounded-lg">
            <h1 className="dark:text-white text-center">Tasks Completed</h1>
            <div className="space-y-4">
                {tasks
                    .filter((task) => task.isCompleted)
                    .map((task) => (
                        <div key={task.id} className="flex space-x-2">
                            <p className="text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md">
                                {task.title}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TasksComplet