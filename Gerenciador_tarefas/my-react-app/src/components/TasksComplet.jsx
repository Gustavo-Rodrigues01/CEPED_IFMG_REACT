import { useContext } from "react"
import { TasksContext } from "../Context/TasksContext"
import { ProjectContext } from "../Context/ProjectContext"
import { useState } from "react"

function TasksComplet(){
    const { tasks} = useContext(TasksContext)
    const { tasksProject } = useContext(ProjectContext)

    const [description, setDescription] = useState(false)
    const [description2, setDescription2] = useState(false)
    function showDescription() {
        setDescription(!description)
     }
     function showDescription2() {
        setDescription2(!description2)
     }

    return (
        <div className="text-3xl w-500px bg-blue-300 dark:bg-blue-900 text-black dark:text-white flex flex-col p-4 space-y-2 rounded-lg">
            <h1 className="dark:text-white text-center">Tasks Completed</h1>
            <div className="space-y-4">
                {tasks
                    .filter((task) => task.isCompleted)
                    .map((task) => (
                        <div className="space-y-1">
                            <div key={task.id} className="flex space-x-2">
                                <button 
                                    className="text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md items-start"
                                    onClick={() => {showDescription()}}>
                                {task.title}</button>
                            </div>
                            {description && (
                                <div
                                className="bg-white dark:bg-gray-800 rounded-md p-2 shadow"
                                >
                                <p className="text-sm">Category: {task.category}</p>
                                <p className="text-sm">Description: {task.description}</p>
                                </div>
                            )}
                        </div>
                    ))
                }
                {tasksProject
                    .filter((tasks) => tasks.isCompleted)
                    .map((tasks) => (
                        <div key={tasks.id} className="space-y-2">
                        
                            <button 
                                onClick={() => {showDescription2()}}
                                className="text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md items-start">
                                {tasks.title}</button>
                                <div>
                                    {description2 && (
                                        <div
                                            className="bg-white dark:bg-gray-800 rounded-md p-2 shadow"
                                            >
                                            <p className="text-sm">Category: {tasks.category}</p>
                                            <p className="text-sm">Description: {tasks.description}</p>
                                        </div>
                                    )}
                                </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default TasksComplet