import { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import {ChevronRight} from "lucide-react"
import { Trash2 } from "lucide-react";
import { useState } from "react";



function ProjectItem({projectId, projectTitle,projectDescription, projectCategory}){
    const [description, setDescription] = useState(false)
    const {projectDelet, tasksLink} = useContext(ProjectContext);

    function showDescription() {
        setDescription(!description)
    }

    return(
        <div className="space-y-1">
            <div className="flex items-center space-x-2">
                
                <button 
                className={`text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md items-start`}
                onClick={() => {showDescription()}}
                >{projectTitle}</button>
                <button onClick={()=>{tasksLink(projectId)}} className="bg-white dark:bg-gray-900 text-black-600 rounded-md w-[60px] h-[50px] flex items-center justify-center"><ChevronRight size={40} strokeWidth={1}/></button>
                <button onClick={() => projectDelet(projectId)} className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"><Trash2  color="red"/></button>
            </div>
            {description && (
            <div
             className="bg-white dark:bg-gray-800 rounded-md p-2 shadow">
                    <p className="text-sm">Category: {projectCategory}</p>
                    <p className="text-sm">Description: {projectDescription}</p>
            </div>
             )}
            
        </div>
    )
}
export default ProjectItem;