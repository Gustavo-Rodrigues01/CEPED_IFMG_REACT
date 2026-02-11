import Contador from "./components/Contador";
import InfoPessoais from "./components/InfoPessoais";
import PerfilUsuario from "./components/PerfilUsuario";
import Componente from "./components/PrimeiroComponente";

function App() {

  return (
    <div className="App">
      <h1>Hello World!</h1>

      <p>exercicio 1</p>
      <Componente/>

      <p>exercicio 2</p>
      <PerfilUsuario/>

      <h2>Exercicio 1 virtual DOM e JSX</h2>
      <Contador/>

      <h2>Exercicio 2 virtual DOM e JSX</h2>
      <InfoPessoais/>

    </div>
  );
};
export default App;