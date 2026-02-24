import { BrowserRouter, Routes} from 'react-router-dom';
import Menu from './components/Menu';
import AppRoutes from './components/AppRoutes';
function App() {
  
  return (
    <>
      <h1>Atividade 1</h1>
      <p>Feita diretamente no arquivo aulas</p>

      <h1>Atividade 2</h1>
      <BrowserRouter>
       <Menu/>
       <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
