import "./App.css"
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import { TasksProvider } from "./Context/TasksContext";
import { ThemeProvider } from "./Context/themeContext";
import ProjectList from "./components/ProjectList";
import { ProjectProvider } from "./Context/ProjectContext";
import ProjectForm from "./components/ProjectForm";
import TasksComplet from "./components/TasksComplet";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';



function App() {

  return (
    <>

      <ThemeProvider>
        <ProjectProvider>
          <TasksProvider>
             <BrowserRouter>
                <Header/>
                <div className="space-y-4 p-6">
                  <Routes>
                    <Route path="/" element={<TaskForm/>}/>
                    <Route path="/Project" element={<ProjectForm/>}/>
                    <Route path="/Historic" element={<TasksComplet/>}/>
                  </Routes>
                  
                </div>
              </BrowserRouter>
          </TasksProvider>
        </ProjectProvider>
       
    </ThemeProvider>
    </>
  );
};

export default App;
