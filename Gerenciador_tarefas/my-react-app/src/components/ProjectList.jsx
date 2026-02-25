import { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";

function ProjectList(){
    const {project, projectDelet} = useContext(ProjectContext);
    return(
        <div>
            <div className="text-3xl w-500px bg-blue-300 dark:bg-blue-900 text-black dark:text-white flex flex-col p-4 space-y-2 rounded-2xl">
                <h1 className="text-center">Project List</h1>
                <div className="space-y-4">{project.map((projects)=>(
                    <div key={projects.id} className="flex space-x-2">
                        <p className={`text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md ${projects.isCompleted && "line-through"}`}>{projects.title}</p>
                        <button onClick={() => projectDelet(projects.id)} className="bg-white dark:bg-gray-900 text-red-600 rounded-md w-[60px] h-[50px]">X</button>
                         <button  className="bg-white dark:bg-gray-900 text-black-600 rounded-md w-[60px] h-[50px]">{">"}</button>
                    </div>
                ))}</div>
            </div>
        </div>
    )
}
export default ProjectList