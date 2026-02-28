import { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import {ChevronRight} from "lucide-react"
import { Trash2 } from "lucide-react";


function ProjectItem({projectId, projectTitle}){
    const {projectDelet, tasksLink} = useContext(ProjectContext);
    return(
        <div className="flex items-center space-x-2">
            <p className={`text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md `}>{projectTitle}</p>
            <button onClick={()=>{tasksLink(projectId)}} className="bg-white dark:bg-gray-900 text-black-600 rounded-md w-[60px] h-[50px] flex items-center justify-center"><ChevronRight size={40} strokeWidth={1}/></button>
            <button onClick={() => projectDelet(projectId)} className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"><Trash2  color="red"/></button>
        </div>
    )
}
export default ProjectItem;