import { useState } from "react";
function TaskForm(props){
    const [title, setTitle] = useState("")


    return(
        <div className="bg-blue-200 rounded-2xl flex flex-col p-4 space-y-2">
            <h1 className="text-3xl ">task form</h1>
            <div className="flex space-x-2">

                <input 
                className="bg-white text-black rounded-md w-full p-2" 
                type="text" 
                placeholder="add new task"
                value={title}
                onChange={(event)=> setTitle(event.target.value)}
                onKeyDown={(e)=>{if(e.key==="Enter" && title != ""){
                    props.taskAdd(title);
                    setTitle("");
                }}}
                />


                <button 
                onClick={()=> {if(title != ""){
                    props.taskAdd(title);
                    setTitle("");
                }}} 
                className="bg-white  text-black rounded-md w-[75px] h-[40px] shadow"
                >Add</button>
            </div>

        </div>
    )
}
export default TaskForm