import ButtonSelector from "./components/atividade1/ButtonSelector";
import { ThemeProvider } from "./components/atividade1/ThemeProvider";
import Cart from "./components/atividade2/Cart";
import ListaProdutos from "./components/atividade2/ListaProdutos";

function App() {

  return (
    <>
      <ThemeProvider>
        <ButtonSelector/>
      </ThemeProvider>
      <h1>Atividade 2</h1>
      <Cart/>
      <ListaProdutos/>
    </>
  )
}

export default App;
