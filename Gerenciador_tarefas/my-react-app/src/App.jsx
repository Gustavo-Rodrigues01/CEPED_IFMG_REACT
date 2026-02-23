import "./App.css"
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/taskItem";
import Header from "./components/Header";
import { TasksProvider } from "./components/TasksContext";
import { ThemeProvider } from "./components/themeContext";


function App() {

  return (
    <>

      <ThemeProvider>
        <TasksProvider>
          <div className="bg-white dark:bg-gray-800">
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
