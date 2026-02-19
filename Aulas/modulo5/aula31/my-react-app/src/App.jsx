import './App.css'
import Counter from './components/exemplo1/Counter'
import Calculation from './components/exemplo2/calculation'
import Clean from './components/exemplo3/Clean'
import BuscadorUsuarios from './components/exemplo4/BuscadorUsuarios'
import BuscadorUsuarios2 from './components/exemplo5/BuscadorUsuarios2'
function App() {

  return (
    <>
      <h1>Exemplo1</h1>
      <Counter/>
      <h1>Exemplo2</h1>
      <Calculation/>
      <h1>Exemplo3</h1>
      <Clean/>
      <h1>Exemplo4</h1>
      <BuscadorUsuarios/>
      <h1>Exemplo5</h1>
      <BuscadorUsuarios2/>
    </>
  )
}

export default App
