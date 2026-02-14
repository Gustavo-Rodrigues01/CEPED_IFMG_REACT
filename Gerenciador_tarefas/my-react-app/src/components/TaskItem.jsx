function TaskItem(props){    
   return(
    <div className="text-3xl w-500px bg-blue-200 flex flex-col p-4 space-y-2 rounded-2xl">
        <h1 className="text-center">Task List</h1>
        
        <div className="space-y-4">{props.tasks.map((tasks)=>(
        <>
        
        <div className="flex space-x-2">
            
            <p key={tasks.id} className={`text-2xl w-full bg-white flex flex-col p-2 space-y-2 rounded-md ${tasks.isCompleted && "line-through"}`}>{tasks.title}</p>
            <button onClick={() => props.taskComplet(tasks.id)} className="bg-white text-green-600 rounded-md w-[60px] h-[50px]">V</button>
            <button onClick={() => props.taskDelet(tasks.id)} className="bg-white text-red-600 rounded-md w-[60px] h-[50px]">X</button>
        </div>
        </>
           ))}</div>
    </div>

 )
};
export default TaskItem;