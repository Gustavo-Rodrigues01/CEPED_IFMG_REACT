import "./App.css"
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/taskItem";
import Header from "./components/Header";
import { TasksProvider } from "./Context/TasksContext";
import { ThemeProvider } from "./Context/themeContext";


function App() {

  return (
    <>

      <ThemeProvider>
        <TasksProvider>
          <div>
            <Header/>
            <div className="space-y-4 p-6">
              <TaskForm/>
              <TaskItem/>
            </div>
          </div>
      </TasksProvider>
    </ThemeProvider>
    </>
  );
};

export default App;
