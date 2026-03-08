import { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import ProjectItem from "./projectItem";
import { useState } from "react";
import ProjectForm from "./ProjectForm"

function ProjectList(){
    const {project} = useContext(ProjectContext);
    const[render, setRender] = useState(false)
    return(

        <div className="space-y-2">
            
            {render && <ProjectForm/>}

            <div className="text-3xl w-500px bg-blue-300 dark:bg-blue-900 text-black dark:text-white flex flex-col p-4 space-y-2 rounded-lg">
                <h1 className="text-center">Project List</h1>
                <button 
                    className="bg-white dark:bg-gray-900 text-black dark:text-white text-2xl rounded-md h-[40px] shadow"
                    onClick={()=> {setRender(!render)}}
                >Add new Project</button>
                <div className="space-y-4">{project.map((projects)=>(
                        
                    <ProjectItem
                    key={projects.id}
                    projectId={projects.id}
                    projectTitle={projects.title}
                    projectDescription={projects.description}
                    projectCategory={projects.category}
                    />

                ))}</div>
            </div>
        </div>
    )
}
export default ProjectList