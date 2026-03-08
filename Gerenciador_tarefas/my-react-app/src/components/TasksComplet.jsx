import { useContext, useState } from "react"
import { TasksContext } from "../Context/TasksContext"
import { ProjectContext } from "../Context/ProjectContext"

function TasksComplet(){
    const { tasks } = useContext(TasksContext)
    const { tasksProject } = useContext(ProjectContext)

    const [openTaskId, setOpenTaskId] = useState(null)

    function toggleDescription(id){
        setOpenTaskId(openTaskId === id ? null : id)
    }

    return (
        <div className="text-3xl bg-blue-300 dark:bg-blue-900 text-black dark:text-white flex flex-col p-4 space-y-2 rounded-lg">
            <h1 className="dark:text-white text-center">Tasks Completed</h1>

            <div className="space-y-4">

                {tasks
                    .filter(task => task.isCompleted)
                    .map(task => (
                        <div key={task.id} className="space-y-1">

                            <button 
                                className="text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 rounded-md items-start"
                                onClick={() => toggleDescription(task.id)}
                            >
                                {task.title}
                            </button>

                            {openTaskId === task.id && (
                                <div className="bg-white dark:bg-gray-800 rounded-md p-2 shadow">
                                    <p className="text-sm">Category: {task.category}</p>
                                    <p className="text-sm">Description: {task.description}</p>
                                </div>
                            )}

                        </div>
                    ))
                }

                {tasksProject
                    .filter(task => task.isCompleted)
                    .map(task => (
                        <div key={task.id} className="space-y-1">

                            <button 
                                className="text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 rounded-md items-start"
                                onClick={() => toggleDescription(task.id)}
                            >
                                {task.title}
                            </button>

                            {openTaskId === task.id && (
                                <div className="bg-white dark:bg-gray-800 rounded-md p-2 shadow">
                                    <p className="text-sm">Category: {task.category}</p>
                                    <p className="text-sm">Description: {task.description}</p>
                                </div>
                            )}

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default TasksComplet