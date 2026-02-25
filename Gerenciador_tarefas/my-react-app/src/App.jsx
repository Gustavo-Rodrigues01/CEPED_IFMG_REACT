import "./App.css"
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import Header from "./components/Header";
import { TasksProvider } from "./Context/TasksContext";
import { ThemeProvider } from "./Context/themeContext";
import ProjectList from "./components/ProjectList";
import { ProjectProvider } from "./Context/ProjectContext";
import ProjectForm from "./components/ProjectForm";


function App() {

  return (
    <>

      <ThemeProvider>
        <ProjectProvider>
          <TasksProvider>
            <div>
              <Header/>
              <div className="space-y-4 p-6">
                <ProjectForm/>
                <ProjectList/>
                <TaskForm/>
                <TaskItem/>
              </div>
            </div>
          </TasksProvider>
        </ProjectProvider>
       
    </ThemeProvider>
    </>
  );
};

export default App;
