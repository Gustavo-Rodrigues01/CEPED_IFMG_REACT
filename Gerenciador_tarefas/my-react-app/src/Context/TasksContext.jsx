import { useState, createContext} from "react";
import { useEffect } from "react";

export const TasksContext =  createContext();

export function TasksProvider({children}){

    const [tasks, setTasks] = useState(()=>{
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

    const [numIncomplet, setNumIncomplete] = useState(0)


//Titulo de documento dinamico "TaskMaster"
  useEffect(() => {
    const pendingTasks = tasks.filter(task => !task.isCompleted).length;
    document.title = `TaskMaster (${pendingTasks} pendentes)`;
  }, [tasks]);

//Responsavel por alterar localStorage
    useEffect(()=>{
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);

//altera o numero de tasks incompletas
    useEffect(()=>{
        TasksIncomplet()
    },[tasks])


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
    function taskAdd(taskTitle,taskInfo, taskCategory){
      const newTask = {
        id: crypto.randomUUID(),
        title: taskTitle,
        description: taskInfo,
        category: taskCategory,
        isCompleted: false
      }

      setTasks([...tasks, newTask])
    }

//Retorna tasks pendentes
    function TasksIncomplet(){
        const newNum = tasks.filter(tasks => tasks.isCompleted !== true)
        setNumIncomplete(newNum.length)
    }

//Editar tarefas
    function tasksEdit(taskId, newTitle, newDescription, newCategory){
      const updatedTasks = tasks.map(task => {
        if(task.id === taskId){
          return {
            ...task,
            title: newTitle,
            description: newDescription,
            category: newCategory
          };
        }
      return task;
  });
  setTasks(updatedTasks);
    }
    return(
        <TasksContext.Provider value={{tasks, numIncomplet, taskComplet, taskDelet, taskAdd, TasksIncomplet, tasksEdit}}>
            {children}
        </TasksContext.Provider>
    )
}