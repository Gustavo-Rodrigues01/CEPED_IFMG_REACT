import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import TaskProjectForm from "./TaskProjectForm";
import { ProjectContext } from "../Context/ProjectContext";
import TaskProjectItem from "./TaskProjectItem";

function TaskProjectList(){
    const {tasksProject,tasksLinkReturn} = useContext(ProjectContext)
    const[render, setRender] = useState(false)
    const { id } = useParams();

    return(
        <div className="space-y-2"> 
            {render && <TaskProjectForm/>}

            <div className="text-3xl bg-blue-300 dark:bg-blue-900 text-black dark:text-white flex flex-col p-4 space-y-2 rounded-lg">

                <h1 className="text-center">Projects tasks</h1>

                <button 
                    className="bg-white dark:bg-gray-900 text-black dark:text-white text-2xl rounded-md h-[40px] shadow"
                    onClick={()=> {setRender(!render)}}
                >Add new Tasks</button>
           
                <div className="space-y-4">
                    {tasksProject
                    .filter(task => task.idProject === id)
                    .map((task) => (
                        <TaskProjectItem
                        key={task.id}
                        taskProjectId={task.id}
                        taskProjectIsCompleted={task.isCompleted}
                        taskProjectDescription={task.description}
                        taskProjectCategory={task.category}
                        taskProjectTitle={task.title}
                        />
                    ))}
                </div>

            </div>
    {/*Botão de retorno*/}
            <div className="w-full flex justify-end p-3">
                <button 
                onClick={()=>{tasksLinkReturn()}}
                className="bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-[100px] h-[40px] shadow"
                >Back</button>
            </div>
        </div>
    )
}
export default TaskProjectList