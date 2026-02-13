import UserCard from "./components/exercicio1/UseCard"
import Lampada from "./components/exercicio2/Lampada";

function App() {

  return (
    <>
      <h1>Exercicio1</h1>
      <UserCard nome="Gustavo" cargo="estudante" foto={"https://img.freepik.com/vetores-premium/icone-de-perfil-de-avatar_188544-4755.jpg"}/>

      <h1>Exercicio2</h1>
      <Lampada/>
    </>
  );
};

export default App;
