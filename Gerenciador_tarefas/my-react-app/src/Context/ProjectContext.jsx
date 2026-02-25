import { useState, createContext} from "react";
import { useEffect } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({children}){

    const [project,setProject] = useState(()=>{
        const storedProject = localStorage.getItem("project");
        return storedProject? JSON.parse(storedProject) : [];
    });

//Envia projetos para a memoria do navegador
    useEffect(()=>{
        localStorage.setItem("project", JSON.stringify(project))
    },[project])

//Marca projeto como concluido

//Cria novo projeto
    function projectAdd(projectTitle){
      const newProject = {
        id: crypto.randomUUID(),
        title: projectTitle,
        isCompleted: false
      }
      setProject([...project, newProject])
    }

//Deleta projeto existente
    function projectDelet(projectId){
        const newProject = project.filter(project => project.id !== projectId)
        return setProject(newProject)
    }

    return(
        <ProjectContext.Provider value={{project, projectAdd, projectDelet}}>
            {children}
        </ProjectContext.Provider>
    )
}