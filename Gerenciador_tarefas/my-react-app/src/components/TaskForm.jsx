import { useState } from "react"
function TaskForm(){
    const [task, setTask] = useState("");


    return(
        <div className="bg-blue-200 rounded-2xl flex flex-col p-4 space-y-2">
            <h1 className="text-3xl">task form</h1>
            <input className="bg-white text-black" type="text" placeholder="add new task"/>
            <button className="bg-white border-2 text-black" onClick={()=> setTask(value)}>submit!</button>
            <p>{task}</p>
            

        </div>
    )
}
export default TaskForm