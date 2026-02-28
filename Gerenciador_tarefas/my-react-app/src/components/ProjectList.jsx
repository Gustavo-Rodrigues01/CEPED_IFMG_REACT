import { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import {ChevronRight} from "lucide-react"
import { Trash2 } from "lucide-react";
import ProjectItem from "./projectItem";

function ProjectList(){
    const {project, projectDelet} = useContext(ProjectContext);
    return(
        <div>
            <div className="text-3xl w-500px bg-blue-300 dark:bg-blue-900 text-black dark:text-white flex flex-col p-4 space-y-2 rounded-lg">
                <h1 className="text-center">Project List</h1>
                <div className="space-y-4">{project.map((projects)=>(
                        
                    <ProjectItem
                    key={projects.id}
                    projectId={projects.id}
                    projectTitle={projects.title}
                    />

                ))}</div>
            </div>
        </div>
    )
}
export default ProjectList