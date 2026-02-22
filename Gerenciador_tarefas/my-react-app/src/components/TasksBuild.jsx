import { useState, createContext} from "react";
import { useEffect } from "react";

export const TasksContext =  createContext();

export function TasksProvider({children}){

    const [tasks, setTasks] = useState(()=>{
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
//Titulo de documento dinamico "TaskMaster"
  useEffect(() => {
    const pendingTasks = tasks.filter(task => !task.isCompleted).length;
    document.title = `TaskMaster (${pendingTasks} pendentes)`;
  }, [tasks]);

//Responsavel por alterar localStorage
    useEffect(()=>{
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);

//Marca tasks como completas
    function taskComplet(taskId){
      const newTask = tasks.map(task => {
        if(task.id === taskId){
          return {...task, isCompleted: !task.isCompleted};
        }
          return task;
      })
      setTasks(newTask);
    }

//Deleta tasks ja existentes
    function taskDelet(taskId){
      const newTask = tasks.filter(tasks => tasks.id !== taskId)
      setTasks(newTask)
    }

//Adiciona novas tarefas
    function taskAdd(taskTitle){
      const newTask = {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }

      setTasks([...tasks, newTask])
    }
    return(
        <TasksContext.Provider value={{tasks, taskComplet, taskDelet, taskAdd}}>
            {children}
        </TasksContext.Provider>
    )
}