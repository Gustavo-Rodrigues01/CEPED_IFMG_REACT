import { useState, createContext} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProjectContext = createContext();

export function ProjectProvider({children}){

    const navigate = useNavigate();


    const [project,setProject] = useState(()=>{
        const storedProject = localStorage.getItem("project");
        return storedProject? JSON.parse(storedProject) : [];
    });
    const [tasksProject, setTasksProject] = useState(()=>{
        const storedTasksProject = localStorage.getItem("tasksproject");
        return storedTasksProject? JSON.parse(storedTasksProject) : [];
    });

//Envia projetos para a memoria do navegador
    useEffect(()=>{
        localStorage.setItem("project", JSON.stringify(project))
    },[project])

//Envia tarefas de projeto para a memoria do navegador
    useEffect(() => {
    localStorage.setItem("tasksproject", JSON.stringify(tasksProject))
}, [tasksProject, project])


//Cria novo projeto
    function projectAdd(projectTitle, projectDescription, projectCategory){
        const newProject = {
            id: crypto.randomUUID(),
            title: projectTitle,
            description: projectDescription,
            category: projectCategory,
            isCompleted: false
        }
        setProject([...project, newProject])
    }

//Cria nova tarefa de projeto
    function tasksProjectsAdd(projectid, tasktitle,projectDescription, projectCategory){
        const newTaskProject = {
            id: crypto.randomUUID(),
            idProject: projectid,
            title: tasktitle,
            description: projectDescription,
            category: projectCategory,
            isCompleted: false
        }
        setTasksProject([...tasksProject, newTaskProject])
    }

//Lista de tarefas do gerenciador
    function tasksLink(id){
        navigate(`/tasks/${id}`);
    }
    function tasksLinkReturn(id){
        navigate("/Project");
    }

//Deleta tarefas de projeto
    function tasksProjectsdelet(tasksId){
        const newTasks = tasksProject.filter(tasks => tasks.id !== tasksId)
      setTasksProject(newTasks)
    }


//Deleta projeto existente
    function projectDelet(projectId){
        const newProject = project.filter(project => project.id !== projectId)
        return setProject(newProject)
    }

//Marca tarefas como completas
    function ProjectTaskComplet(taskId){
      const newTask = tasksProject.map(task => {
        if(task.id === taskId){
          return {...task, isCompleted: !task.isCompleted};
        }
          return task;
      })
      setTasksProject(newTask);
    }

    return(
        <ProjectContext.Provider value={{project,tasksProject ,projectAdd, projectDelet, tasksProjectsAdd, tasksProjectsdelet, tasksLink, ProjectTaskComplet, tasksLinkReturn}}>
            {children}
        </ProjectContext.Provider>
    )
}