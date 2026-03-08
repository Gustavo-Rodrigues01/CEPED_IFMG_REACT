import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import { Check, Trash2, PenLine } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../Context/TasksFormhook";

function TaskProjectItem() {

  const { id } = useParams();

  const {
    tasksProject,
    tasksProjectsdelet,
    ProjectTaskComplet,
    tasksLinkReturn,
    tasksProjectEdit
  } = useContext(ProjectContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid},} = useForm({resolver:zodResolver(formSchema), mode:"onChange", defaultValues: {
      title: "",
      description: "",
      category: ""
  }})

  const onSubmit = ((data) => {
    const {titulo, description, category} =  data;
    tasksProjectEdit(editing, titulo, description, category);
      setEditing(false);
      reset({
        title: tasksProject.title,
        description: tasksProject.description,
        category: tasksProject.category
      })
    })

  const [description, setDescription] = useState(false)

  const [editing, setEditing] = useState(null);

  function showDescription(taskId) {
    setDescription(description === taskId ? null : taskId)
  }
  

  return (
    <div className="space-y-2">
      <div className="text-3xl w-500px bg-blue-300 dark:bg-blue-900 text-black dark:text-white flex flex-col p-4 space-y-2 rounded-lg">
        {tasksProject
          .filter(task => task.idProject === id)
          .map(task => (
            <div key={task.id}>
              <div key={task.id} className="flex items-center gap-2">
                
              {/*Botao de mostrar descrição da terefa*/}
                <button
                  className={`text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md items-start ${
                    task.isCompleted ? "line-through text-gray-400" : ""}`}
                    onClick={() => showDescription(task.id)}
                >{task.title}</button>

              {/*Botão de editar tarefa*/}
                <button
                  onClick={() => setEditing(task.id)}
                  className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
                ><PenLine/></button>

              {/*Botão de marcar tarefa como feita*/}
                <button
                  onClick={() => ProjectTaskComplet(task.id)}
                  className="bg-white dark:bg-gray-900 text-black-600 rounded-md w-[60px] h-[50px] flex items-center justify-center"
                ><Check color="green" size={25} /></button>

              {/*Botão de remover tarefa*/}
                <button
                  onClick={() => tasksProjectsdelet(task.id)}
                  className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
                ><Trash2 color="red" size={25} /></button>
              </div>

            {/*Descriçao da tarefa*/}
              {description === task.id && (
                <div className="bg-white dark:bg-gray-800 rounded-md p-2 shadow">
                  <p className="text-sm">Category: {task.category}</p>
                  <p className="text-sm">Description: {task.description}</p>
                </div>
              )}


            {/*Aba de  edição da tarefa */}
              {editing === task.id && (
                <form  onSubmit={handleSubmit(onSubmit)}>
                  <div  className="bg-white dark:bg-gray-800 rounded-md p-2 shadow">
                    <input 
                            className={`bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-full p-2 text-sm
                                ${
                                    errors.title
                                        ? "border-red-500 shadow-sm shadow-red-200"
                                        : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                }`}
                            type="text" 
                            placeholder="add new task"
                            {...register("title")}
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm">{errors.title.message}</p>
                        )}
                        <input 
                            className="bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-full p-2 text-sm" 
                            type="text" 
                            placeholder="add task description"
                            {...register("description")}
                        />
                        <select {...register("category")} className={`bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-full p-2 text-sm
                                ${
                                    errors.title
                                        ? "border-red-500 shadow-sm shadow-red-200"
                                        : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                }`}>
                            <option value="">Selecione uma categoria</option>
                            <option value="Estudos">Estudos</option>
                            <option value="Trabalho">Trabalho</option>
                            <option value="Pessoal">Pessoal</option>
                        </select>
                        {errors.category && (
                            <p className="text-red-500 text-sm">{errors.category.message}</p>
                        )}

                        <button 
                          type="submit"
                          disabled={!isValid}
                          className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-md h-[40px] shadow w-full text-sm"
                        >To update</button>
                  </div>
                </form>
              )}

            {/*Aba de  edição da tarefa */}
            </div>
          ))}

    {/*Botão de retorno*/}
      </div>
        <div className="w-full flex justify-end p-3">
            <button 
            onClick={()=>{tasksLinkReturn()}}
            className="bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-[100px] h-[40px] shadow"
            >Back</button>
        </div>
      </div>
      
  );
}

export default TaskProjectItem;