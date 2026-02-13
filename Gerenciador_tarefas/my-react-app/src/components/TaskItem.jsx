function TaskItem(props){
    

   return(
    <div className="text-3xl w-500px bg-blue-200 flex flex-col p-4 space-y-2 rounded-2xl">

        <h1>Task List</h1>
        <div className="space-y-4">{props.tasks.map((tasks)=>(
        <>
        <div className="flex space-x-2">
            <p className="
                text-3xl 
                w-full 
                bg-white 
                flex 
                flex-col 
                p-2 
                space-y-
                rounded-2xl
                ">
                {tasks.title}</p>
            <button  className="bg-white text-green-600 rounded-2xl w-[60px] h-[50px]">V</button>
            <button  className="bg-white text-red-600 rounded-2xl w-[60px] h-[50px]">X</button>
        </div>
        </>
           ))}</div>
    </div>

 )
};
export default TaskItem;