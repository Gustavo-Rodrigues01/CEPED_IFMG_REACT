import "./App.css"
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/taskItem";
import Header from "./components/Header";
import { TasksProvider } from "./components/TasksBuild";


function App() {

  return (
    <>
    <TasksProvider>
      <Header/>
        <div className="space-y-4 p-6">
          <TaskForm/>
          <TaskItem/>
        </div>
    </TasksProvider>
    
    </>
  );
};

export default App;
