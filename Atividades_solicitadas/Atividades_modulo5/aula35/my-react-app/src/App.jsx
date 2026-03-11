import GreetingWithBorder from "./components/atividade1/withLogger"
import Timer from "./components/atividade2/Timer"
import { useState } from "react"
function App() {
  
  const [render,setRender] = useState(true)
  const [render1,setRender1] = useState(true)
  const [render2,setRender2] = useState(true)
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
     <h1>Atividade 1</h1>
     <GreetingWithBorder name="Gustavo"/>
     <GreetingWithBorder name="Manuela"/>

     <h1>Atividade 2</h1>

     {render && (
        <Timer
       render={(seconds) => <h1>Tempo: {seconds}s</h1>}
      />
     )}
    <button onClick={()=>{setRender(!render)}}>render timer</button>


    {render1 && (
        <Timer
          render={(seconds) => (
            <input value={seconds} readOnly />
          )}
        />
    )} 
    <button onClick={()=>{setRender1(!render1)}}>render timer input</button>
    {render2 && (
    <Timer
      render={(seconds) => {
        if (seconds === 10) {
          alert("Chegou em 10 segundos!");
        }
        return <p>{seconds}</p>;
      }}
    />
    )}
     <button onClick={()=>{setRender(!render)}}>render timer alert</button>
    
    </div>
  )
}

export default App
