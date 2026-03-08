import Greeting from "./Components/exemplo1/Greeting"
import GreetingWithBorder from "./Components/exemplo1/WithBorder"
import Mouse from "./Components/exemplo2/MouseRender"

function App() {

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
      <h1>Exemplo 1</h1>
      <div style={{display: "flex", alignItems: "center", flexDirection: "column", border:"2px solid white", padding:"50px", borderRadius: "10px"}}>
        <Greeting name="Gustavo"/>
        <GreetingWithBorder name="Cid Nelson"/>
      </div>
      <h1>Exemplo 2</h1>
      <div style={{display: "flex", alignItems: "center", flexDirection: "column", border:"2px solid white", padding:"50px", borderRadius:"10px"}}>
        <Mouse
          render={(m) => (
            <p>
              Posição: ({m.x}, {m.y})
            </p>
  )}
/>
      </div>
    </div>
  )
}

export default App
