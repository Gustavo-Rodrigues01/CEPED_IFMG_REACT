import "./App.css"
import Header from "./components/Header";
import { TasksProvider } from "./Context/TasksContext";
import { ThemeProvider } from "./Context/themeContext";
import ProjectList from "./components/ProjectList";
import { ProjectProvider } from "./Context/ProjectContext";
import TasksComplet from "./components/TasksComplet";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import TaskList from "./components/TaskList";
import TaskProjectList from "./components/TaskProjectList"

function App() {

  return (
    <>

      <ThemeProvider>
        <BrowserRouter>
          <ProjectProvider>
            <TasksProvider>
              
                  <Header/>
                  <div className="space-y-4 p-6">
                    <Routes>
                      <Route path="/" element={<TaskList/>}/>
                      <Route path="/Project" element={<ProjectList/>}/>
                      <Route path="/Historic" element={<TasksComplet/>}/>
                      <Route path="/tasks/:id" element={<TaskProjectList/>}/>
                    </Routes>
                    
                  </div>
              
            </TasksProvider>
          </ProjectProvider>
        </BrowserRouter>
    </ThemeProvider>
    </>
  );
};

export default App;
