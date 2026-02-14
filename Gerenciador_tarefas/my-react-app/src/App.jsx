import "./App.css"
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/taskItem";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
      {
        id: 1,
        title: "Estudar",
        isCompleted:false
      },
      {
        id: 2,
        title: "fazer atividades",
        isCompleted:false
      },
      {
        id: 3,
        title: "fazer lista de tarefas",
        isCompleted: false
      }
    ]);

    function taskComplet(taskId){
      const newTask = tasks.map(task => {
        if(task.id === taskId){
          return {...task, isCompleted: !task.isCompleted};
        }
          return task;
      })
      setTasks(newTask);
    }

    function taskDelet(taskId){
      const newTask = tasks.filter(tasks => tasks.id !== taskId)
      setTasks(newTask)
    }

    function taskAdd(taskTitle){
      const newTask = {
        id: tasks.length+1,
        title: taskTitle,
        isCompleted: false
      }

      setTasks([...tasks, newTask])
    }

  return (
    <div className="space-y-4 p-6">
      <TaskForm taskAdd={taskAdd}/>
      <TaskItem tasks={tasks} taskComplet={taskComplet} taskDelet={taskDelet}/>
    </div>
  );
};

export default App;
