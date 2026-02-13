import "./App.css"
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/taskItem";
import TaskList from "./components/TaskList";
import { useState } from "react";
function App() {
const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "Estudar"
  },
  {
    id: 2,
    title: "fazer atividades"
  },
  {
    id: 3,
    title: "fazer lista de tarefas"
  }
])


  return (
    <div className="space-y-4 p-6">
      <TaskForm/>
      <TaskItem tasks={tasks}/>
    </div>
  );
};

export default App;
